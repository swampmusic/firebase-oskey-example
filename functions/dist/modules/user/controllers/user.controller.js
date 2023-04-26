"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSKUserController = void 0;
const firestore_1 = require("firebase-admin/firestore");
const firebase_admin_1 = require("firebase-admin");
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const fs = __importStar(require("fs"));
const child = __importStar(require("child-process-promise"));
const core_1 = require("../../core");
class OSKUserController extends core_1.OSKDocumentController {
    constructor() {
        super();
    }
    async get(userId) {
        return await OSKUserController.default._get('/users', userId);
    }
    async getByEmail(email) {
        try {
            const user = await (0, firebase_admin_1.auth)().getUserByEmail(email);
            return await OSKUserController.default._get('/users', user.uid);
        }
        catch (_) {
            return undefined;
        }
    }
    async save(userId, data) {
        await OSKUserController.default._set('/users', userId, data);
    }
    async create(userAccount) {
        var _a;
        const ts = firestore_1.Timestamp.now();
        const displayName = userAccount.displayName || ((_a = userAccount.email) === null || _a === void 0 ? void 0 : _a.split('@')[0]) || '';
        const user = {
            userId: userAccount.uid,
            email: userAccount.email || '',
            publicProfile: { firstName: displayName, lastName: '' },
            privateProfile: {},
        };
        await OSKUserController.default._set('/users', userAccount.uid, Object.assign(Object.assign({}, user), { creationDate: ts }));
        // Sync back the display name
        if (!userAccount.displayName) {
            await OSKUserController.default._syncAuthDisplayName(userAccount.uid, displayName);
        }
    }
    async cascadePublicProfileChange(userId, oldPublicProfile, newPublicProfile) {
        // Delete old image and move new image to public folder
        if (oldPublicProfile.profileImageFilename !== newPublicProfile.profileImageFilename) {
            if (oldPublicProfile.profileImageFilename) {
                try {
                    await (0, firebase_admin_1.storage)().bucket().file(`users/${userId}/public/profileImages/${oldPublicProfile.profileImageFilename}`).delete();
                }
                catch (_) {
                    // Do nothing
                }
                try {
                    await (0, firebase_admin_1.storage)().bucket().file(`users/${userId}/public/profileImages/thumbnails/${oldPublicProfile.profileImageFilename}`).delete();
                }
                catch (_) {
                    // Do nothing
                }
            }
        }
        // Sync display name it was changed by the user
        OSKUserController.default._syncAuthDisplayName(userId, `${newPublicProfile.lastName.length > 0 ? `${newPublicProfile.lastName}, ` : ''}${newPublicProfile.firstName}`);
    }
    async delete(userId) {
        await OSKUserController.default._delete('/users', userId);
        try {
            await (0, firebase_admin_1.storage)()
                .bucket()
                .deleteFiles({ prefix: `users/${userId}`, force: true });
        }
        catch (_) {
            // Do nothing
        }
    }
    async _syncAuthDisplayName(userId, displayName) {
        await (0, firebase_admin_1.auth)().updateUser(userId, { displayName: displayName });
    }
    async updateProfileImage(bucket, imagePath, contentType) {
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
                await (0, firebase_admin_1.storage)().bucket(bucket).file(imagePath).download({ destination: tempFilePath, validation: false });
                // Convert
                await child.spawn('convert', [tempFilePath, '-thumbnail', '256x256!', tempFilePath]);
                // Upload
                await (0, firebase_admin_1.storage)()
                    .bucket(bucket)
                    .upload(tempFilePath, { destination: thumbnailPath, metadata: { contentType: contentType } });
                // Delete temporary file
                fs.unlinkSync(tempFilePath);
                // Update the user profile
                user.publicProfile.profileImageFilename = filename;
                await OSKUserController.default.save(userId, user);
            }
            catch (error) {
                try {
                    await (0, firebase_admin_1.storage)().bucket(bucket).file(imagePath).delete();
                }
                catch (_) {
                    // Do nothing
                }
                try {
                    fs.unlinkSync(tempFilePath);
                }
                catch (_) {
                    // Do nothing
                }
                try {
                    await (0, firebase_admin_1.storage)().bucket(bucket).file(thumbnailPath).delete();
                }
                catch (_) {
                    // Do nothing
                }
            }
        }
        else {
            try {
                fs.unlinkSync(imagePath);
            }
            catch (_) {
                // Do nothing
            }
            throw new Error(`User ${userId} does not exists`);
        }
    }
}
exports.OSKUserController = OSKUserController;
OSKUserController.default = new OSKUserController();
//# sourceMappingURL=user.controller.js.map