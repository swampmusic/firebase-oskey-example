"use strict";
/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSKUserAccountController = void 0;
const admin = require("firebase-admin");
class OSKUserAccountController {
    async onUserAccountCreated(userAccount) {
        const db = admin.firestore();
        const ts = admin.firestore.Timestamp.now();
        // Create user record in data
        const user = {
            userId: userAccount.uid,
            email: userAccount.email,
            publicProfile: { displayName: userAccount.displayName || '' },
            privateProfile: { fullName: userAccount.displayName || '' },
            creationDate: ts
        };
        const userStatus = {
            isProfileComplete: false,
            creationDate: ts
        };
        await db.collection(`/users/${userAccount.uid}/status`).doc(userAccount.uid).create(userStatus);
        await db.collection('/users/').doc(userAccount.uid).create(user);
    }
    async onUserAccountDeleted(user) {
        const db = admin.firestore();
        // Remove all user record
        const userAccount = await db.doc(`/users/${user.uid}`).get();
        if (userAccount.exists) {
            // Delete status
            await db.collection(`/users/${user.uid}/status`).doc(user.uid).delete();
            // At the end, delete the user record
            await db.collection('/users').doc(user.uid).delete();
        }
    }
}
exports.OSKUserAccountController = OSKUserAccountController;
//# sourceMappingURL=user_account.controller.js.map