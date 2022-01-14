/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import * as admin from 'firebase-admin';

import { OSKUserDocument } from '../../firebase_firestore/models/user_document.model';
import { OSKUserStatusDocument } from '../../firebase_firestore/models/user_status_document.model';

export class OSKUserAccountController {
  async onUserAccountCreated(userAccount: admin.auth.UserRecord) {
    const db = admin.firestore();
    const ts = admin.firestore.Timestamp.now();

    // Create user record in data
    const user: OSKUserDocument = {
      userId: userAccount.uid,
      email: userAccount.email!, // There should always be an email
      publicProfile: { displayName: userAccount.displayName || '' },
      privateProfile: { fullName: userAccount.displayName || '' },
      creationDate: ts
    };

    const userStatus: OSKUserStatusDocument = {
      isProfileComplete: false,
      creationDate: ts
    };

    await db.collection(`/users/${userAccount.uid}/status`).doc(userAccount.uid).create(userStatus);

    await db.collection('/users/').doc(userAccount.uid).create(user);
  }

  async onUserAccountDeleted(user: admin.auth.UserRecord) {
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
