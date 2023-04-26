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
import { DocumentSnapshot } from '@google-cloud/firestore';
import { Change, EventContext } from 'firebase-functions';
import { UserRecord } from 'firebase-functions/v1/auth';

import { OSKUserDocument } from '../models/documents/user_document.model';
import { OSKUserController } from '../controllers/user.controller';
import { OSKUserStatusController } from '../controllers/user_status.controller';

export class OSKUserService {
    static async onDocumentCreated(snapshot: DocumentSnapshot, context: EventContext) {
        const ts = Timestamp.now();
        const userId = context.params.userId as string;

        const user: OSKUserDocument = {
            userId: snapshot.data()?.userId,
            email: snapshot.data()?.email,
            publicProfile: snapshot.data()?.publicProfile,
            privateProfile: snapshot.data()?.privateProfile,
            creationDate: ts,
        };

        await OSKUserController.default.save(userId, user);
        await OSKUserStatusController.default.create(userId);
    }

    static async onDocumentUpdated(snapshot: Change<DocumentSnapshot>, context: EventContext) {
        const userId = context.params.userId as string;

        const userBefore = snapshot.before.data() as OSKUserDocument;
        const userAfter = snapshot.after.data() as OSKUserDocument;
        userBefore.creationDate = userAfter.creationDate;

        if (userBefore === userAfter) return;

        // There should be data
        if (userBefore && userAfter) {
            // Sync display name and profile image
            if (userBefore.publicProfile !== userAfter.publicProfile) {
                await OSKUserController.default.cascadePublicProfileChange(userId, userBefore.publicProfile, userAfter.publicProfile);
            }
            if (userBefore.publicProfile !== userAfter.publicProfile || userBefore.privateProfile !== userAfter.privateProfile) {
                await OSKUserStatusController.default.setUserProfileCompletionStatus(userId, userAfter.publicProfile, userAfter.privateProfile);
            }
        }
    }

    static async onDocumentDeleted(snapshot: DocumentSnapshot, context: EventContext) {
        const userId = context.params.userId as string;

        // Delete status
        await OSKUserStatusController.default.delete(userId);
    }

    static async onAccountCreated(userAccount: UserRecord) {
        await OSKUserController.default.create(userAccount);
    }

    static async onAccountDeleted(userAccount: UserRecord) {
        const user = await OSKUserController.default.get(userAccount.uid);
        if (user) {
            await OSKUserController.default.delete(userAccount.uid);
        }
    }
}
