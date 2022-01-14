/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import * as admin from 'firebase-admin';

import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
import { Change, EventContext } from 'firebase-functions';
import { OSKUserDocument } from '../models/user_document.model';
import { OSKUserStatusDocument } from '../models/user_status_document.model';

export class OSKUserController {
  async onCreate(snapshot: DocumentSnapshot, context: EventContext) {
    const db = admin.firestore();

    const { userId } = context.params;

    const user = snapshot.data() as OSKUserDocument;

    const userStatus = (await db.collection(`/users/${userId}/status`).doc(userId).get()).data() as OSKUserStatusDocument;

    // Check user profile is completed
    if (!userStatus.isProfileComplete) {
      const displayName = user.publicProfile?.displayName;
      const fullName = user.privateProfile?.fullName;
      if (displayName !== '' && fullName !== '') {
        await db
          .collection(`/users/${userId}/status`)
          .doc(userId)
          .set({ isProfileComplete: true }, { merge: true });
      }
    }
  }

  async onUpdate(snapshot: Change<DocumentSnapshot>, context: EventContext) {
    const db = admin.firestore();

    const { userId } = context.params;

    const originalUser = snapshot.before.data() as OSKUserDocument;
    const updatedUser = snapshot.after.data() as OSKUserDocument;

    const userStatus = (await db.collection(`/users/${userId}/status`).doc(userId).get()).data() as OSKUserStatusDocument;

    // There should be data
    if (originalUser && updatedUser) {
      // Check user profile is completed
      if (!userStatus.isProfileComplete) {
        if (updatedUser) {
          const displayName = updatedUser.publicProfile?.displayName;
          const fullName = updatedUser.privateProfile?.fullName;
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
