//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

import { Timestamp } from 'firebase-admin/firestore';
import { UserRecord } from 'firebase-admin/auth';
import { auth, storage } from 'firebase-admin';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import * as child from 'child-process-promise';

import { OSKDocumentController } from '@oskey/core';

import { OSKUser, OSKUserDocument } from '../models/documents/user_document.model';
import { OSKUserPublicProfile } from '../models/documents/user_public_profile.model';

export class OSKUserController extends OSKDocumentController<OSKUserDocument> {
    static default = new OSKUserController();

    constructor() {
        super();
    }

    async get(userId: string): Promise<OSKUserDocument | undefined> {
        return await OSKUserController.default._get('/users', userId);
    }

    async getByEmail(email: string): Promise<OSKUserDocument | undefined> {
        try {
            const user = await auth().getUserByEmail(email);
            return await OSKUserController.default._get('/users', user.uid);
        } catch (_) {
            return undefined;
        }
    }

    async save(userId: string, data: OSKUserDocument) {
        await OSKUserController.default._set('/users', userId, data);
    }

    async create(userAccount: UserRecord) {
        const ts = Timestamp.now();

        const displayName = userAccount.displayName || userAccount.email?.split('@')[0] || '';
        const user: OSKUser = {
            userId: userAccount.uid, // There should always be an email
            email: userAccount.email || '',
            publicProfile: { firstName: displayName, lastName: '' },
            privateProfile: {},
        };

        await OSKUserController.default._set('/users', userAccount.uid, { ...user, creationDate: ts });

        // Sync back the display name
        if (!userAccount.displayName) {
            await OSKUserController.default._syncAuthDisplayName(userAccount.uid, displayName);
        }
    }

    async cascadePublicProfileChange(userId: string, oldPublicProfile: OSKUserPublicProfile, newPublicProfile: OSKUserPublicProfile) {
        // Delete old image and move new image to public folder
        if (oldPublicProfile.profileImageFilename !== newPublicProfile.profileImageFilename) {
            if (oldPublicProfile.profileImageFilename) {
                try {
                    await storage().bucket().file(`users/${userId}/public/profileImages/${oldPublicProfile.profileImageFilename}`).delete();
                } catch (_) {
                    // Do nothing
                }
                try {
                    await storage().bucket().file(`users/${userId}/public/profileImages/thumbnails/${oldPublicProfile.profileImageFilename}`).delete();
                } catch (_) {
                    // Do nothing
                }
            }
        }

        // Sync display name it was changed by the user
        OSKUserController.default._syncAuthDisplayName(userId, `${newPublicProfile.lastName.length > 0 ? `${newPublicProfile.lastName}, ` : ''}${newPublicProfile.firstName}`);
    }

    async delete(userId: string) {
        await OSKUserController.default._delete('/users', userId);

        try {
            await storage()
                .bucket()
                .deleteFiles({ prefix: `users/${userId}`, force: true });
        } catch (_) {
            // Do nothing
        }
    }

    private async _syncAuthDisplayName(userId: string, displayName: string) {
        await auth().updateUser(userId, { displayName: displayName });
    }

    async updateProfileImage(bucket: string, imagePath: string, contentType: string) {
        // Generate temporary path
        const filename = path.basename(imagePath);
        const tempFilePath = path.join(os.tmpdir(), filename);
        const thumbnailPath = path.join(path.dirname(imagePath), 'thumbnails', filename);

        // Get user
        const userId = imagePath.split('/')[1];
        const user = await OSKUserController.default.get(userId);
        if (user) {
            try {
                // Download
                await storage().bucket(bucket).file(imagePath).download({ destination: tempFilePath, validation: false });

                // Convert
                await child.spawn('convert', [tempFilePath, '-thumbnail', '256x256!', tempFilePath]);

                // Upload
                await storage()
                    .bucket(bucket)
                    .upload(tempFilePath, { destination: thumbnailPath, metadata: { contentType: contentType } });

                // Delete temporary file
                fs.unlinkSync(tempFilePath);

                // Update the user profile
                user.publicProfile.profileImageFilename = filename;
                await OSKUserController.default.save(userId, user);
            } catch (error) {
                try {
                    await storage().bucket(bucket).file(imagePath).delete();
                } catch (_) {
                    // Do nothing
                }
                try {
                    fs.unlinkSync(tempFilePath);
                } catch (_) {
                    // Do nothing
                }
                try {
                    await storage().bucket(bucket).file(thumbnailPath).delete();
                } catch (_) {
                    // Do nothing
                }
            }
        } else {
            try {
                fs.unlinkSync(imagePath);
            } catch (_) {
                // Do nothing
            }
            throw new Error(`User ${userId} does not exists`);
        }
    }
}
