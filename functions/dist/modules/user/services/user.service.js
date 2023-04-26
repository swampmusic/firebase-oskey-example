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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSKUserService = void 0;
const firestore_1 = require("firebase-admin/firestore");
const user_controller_1 = require("../controllers/user.controller");
const user_status_controller_1 = require("../controllers/user_status.controller");
class OSKUserService {
    static async onDocumentCreated(snapshot, context) {
        var _a, _b, _c, _d;
        const ts = firestore_1.Timestamp.now();
        const userId = context.params.userId;
        const user = {
            userId: (_a = snapshot.data()) === null || _a === void 0 ? void 0 : _a.userId,
            email: (_b = snapshot.data()) === null || _b === void 0 ? void 0 : _b.email,
            publicProfile: (_c = snapshot.data()) === null || _c === void 0 ? void 0 : _c.publicProfile,
            privateProfile: (_d = snapshot.data()) === null || _d === void 0 ? void 0 : _d.privateProfile,
            creationDate: ts,
        };
        await user_controller_1.OSKUserController.default.save(userId, user);
        await user_status_controller_1.OSKUserStatusController.default.create(userId);
    }
    static async onDocumentUpdated(snapshot, context) {
        const userId = context.params.userId;
        const userBefore = snapshot.before.data();
        const userAfter = snapshot.after.data();
        userBefore.creationDate = userAfter.creationDate;
        if (userBefore === userAfter)
            return;
        // There should be data
        if (userBefore && userAfter) {
            // Sync display name and profile image
            if (userBefore.publicProfile !== userAfter.publicProfile) {
                await user_controller_1.OSKUserController.default.cascadePublicProfileChange(userId, userBefore.publicProfile, userAfter.publicProfile);
            }
            if (userBefore.publicProfile !== userAfter.publicProfile || userBefore.privateProfile !== userAfter.privateProfile) {
                await user_status_controller_1.OSKUserStatusController.default.setUserProfileCompletionStatus(userId, userAfter.publicProfile, userAfter.privateProfile);
            }
        }
    }
    static async onDocumentDeleted(snapshot, context) {
        const userId = context.params.userId;
        // Delete status
        await user_status_controller_1.OSKUserStatusController.default.delete(userId);
    }
    static async onAccountCreated(userAccount) {
        await user_controller_1.OSKUserController.default.create(userAccount);
    }
    static async onAccountDeleted(userAccount) {
        const user = await user_controller_1.OSKUserController.default.get(userAccount.uid);
        if (user) {
            await user_controller_1.OSKUserController.default.delete(userAccount.uid);
        }
    }
}
exports.OSKUserService = OSKUserService;
//# sourceMappingURL=user.service.js.map