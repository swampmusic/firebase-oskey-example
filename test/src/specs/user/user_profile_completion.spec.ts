/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { it } from 'mocha';
import { expect } from 'chai';
import { UserCredential } from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';
import { assertSucceeds } from 'gp-firebase-emulator-unit-test';

import { OSKUnitTestApps } from '../../models/unit_test_apps.model';

import { checkField } from '../../helpers/field_checkers.helper';
import { OSKTDUser } from '../../models/user.model';

function checkUserDocumentUpdated(userDoc: firebaseFirestore.DocumentSnapshot<any>, user: OSKTDUser, documentPath: string) {
  expect(userDoc.exists(), `Missing document ${documentPath}`).to.be.true;

  const userData = userDoc.data();

  expect(userData.publicProfile, 'Missing field \'publicProfile\'').to.exist;
  if (userData.publicProfile) {
    checkField(documentPath, 'publicProfile.displayName', 'string', userData.publicProfile.displayName, user.data!.publicProfile.displayName);
  }

  expect(userData.privateProfile, 'Missing field \'privateProfile\'').to.exist;
  if (userData.privateProfile) {
    checkField(documentPath, 'privateProfile.fullName', 'string', userData.privateProfile.fullName, user.data!.privateProfile.fullName);
  }
};

function checkUserStatusDocumentUpdated(userStatusDoc: firebaseFirestore.DocumentSnapshot<any>, documentPath: string) {
  expect(userStatusDoc.exists(), `Missing document ${documentPath}`).to.be.true;

  const userStatusData = userStatusDoc.data();

  checkField(documentPath, 'isProfileComplete', 'boolean', userStatusData.isProfileComplete, true);
};

export function testUserProfileCompletion(apps: OSKUnitTestApps, user: OSKTDUser) {
  if (user.data) {
    it('Complete user profile (Firestore)', async () => {
      await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
        const db = apps.firebaseTestApp.firestore;

        const updatedUserDoc = {
          publicProfile: user.data!.publicProfile,
          privateProfile: user.data!.privateProfile
        };

        await assertSucceeds(firebaseFirestore.setDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`), updatedUserDoc, { merge: true }));
      });
    });
    it('Check user document has been updated (Firestore)', async () => {
      await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
        const db = apps.firebaseTestApp.firestore;

        const userDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`)));

        checkUserDocumentUpdated(userDoc, user, `/users/${userCredential.user.uid}`);
      });
    }).retries(20);
    it('Check user status document has been updated (Firestore)', async () => {
      await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
        const db = apps.firebaseTestApp.firestore;

        const userStatusDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/status/${userCredential.user.uid}`)));

        checkUserStatusDocumentUpdated(userStatusDoc, `/users/${userCredential.user.uid}/status/${userCredential.user.uid}`);
      });
    }).retries(20);
  }
}
