"use strict";
/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSKUserController = void 0;
const admin = require("firebase-admin");
class OSKUserController {
    async onCreate(snapshot, context) {
        var _a, _b;
        const db = admin.firestore();
        const { userId } = context.params;
        const user = snapshot.data();
        const userStatus = (await db.collection(`/users/${userId}/status`).doc(userId).get()).data();
        // Check user profile is completed
        if (!userStatus.isProfileComplete) {
            const displayName = (_a = user.publicProfile) === null || _a === void 0 ? void 0 : _a.displayName;
            const fullName = (_b = user.privateProfile) === null || _b === void 0 ? void 0 : _b.fullName;
            if (displayName !== '' && fullName !== '') {
                await db
                    .collection(`/users/${userId}/status`)
                    .doc(userId)
                    .set({ isProfileComplete: true }, { merge: true });
            }
        }
    }
    async onUpdate(snapshot, context) {
        var _a, _b;
        const db = admin.firestore();
        const { userId } = context.params;
        const originalUser = snapshot.before.data();
        const updatedUser = snapshot.after.data();
        const userStatus = (await db.collection(`/users/${userId}/status`).doc(userId).get()).data();
        // There should be data
        if (originalUser && updatedUser) {
            // Check user profile is completed
            if (!userStatus.isProfileComplete) {
                if (updatedUser) {
                    const displayName = (_a = updatedUser.publicProfile) === null || _a === void 0 ? void 0 : _a.displayName;
                    const fullName = (_b = updatedUser.privateProfile) === null || _b === void 0 ? void 0 : _b.fullName;
                    if (displayName !== '' && fullName !== '') {
                        await db
                            .collection(`/users/${userId}/status`)
                            .doc(userId)
                            .set({ isProfileComplete: true }, { merge: true });
                    }
                }
            }
        }
    }
}
exports.OSKUserController = OSKUserController;
//# sourceMappingURL=user.controller.js.map