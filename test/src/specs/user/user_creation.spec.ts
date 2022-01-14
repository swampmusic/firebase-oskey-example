/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { UserCredential } from 'firebase/auth';
import * as firebaseAuth from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';
import { assertSucceeds } from 'gp-firebase-emulator-unit-test';

import { data } from '../../includes/data';
import { OSKUnitTestApps } from '../../models/unit_test_apps.model';

import { checkField } from '../../helpers/field_checkers.helper';
import { OSKTDUser } from '../../models/user.model';
import { getUidFromEmail } from '../../helpers/user_queries.help';
import { testUserProfileCompletion } from './user_profile_completion.spec';

function checkUserDocumentCreated(userDoc: firebaseFirestore.DocumentSnapshot<any>, user: OSKTDUser, documentPath: string) {
  expect(userDoc.exists(), `Missing document ${documentPath}`).to.be.true;

  const userData = userDoc.data();

  expect(userData.creationDate, 'Creation date is not yet set').to.exist;
  checkField(documentPath, 'email', 'string', userData.email, `${user.auth.email}`);

  expect(userData.publicProfile, 'Missing field \'publicProfile\'').to.exist;
  if (userData.publicProfile) {
    checkField(documentPath, 'publicProfile.displayName', 'string', userData.publicProfile.displayName, user.auth.email.split('@')[0]);
  }

  expect(userData.privateProfile, 'Missing field \'privateProfile\'').to.exist;
  if (userData.privateProfile) {
    checkField(documentPath, 'privateProfile.fullName', 'string', userData.privateProfile.fullName, user.auth.email.split('@')[0]);
  }
};

function checkUserStatusDocumentCreated(userStatusDoc: firebaseFirestore.DocumentSnapshot<any>, documentPath: string) {
  expect(userStatusDoc.exists(), `Missing document ${documentPath}`).to.be.true;

  const userStatusData = userStatusDoc.data();

  checkField(documentPath, 'isProfileComplete', 'boolean', userStatusData.isProfileComplete, false);
};

export function testUserCreation(apps: OSKUnitTestApps) {
  const users = [...data.users, data.testDeletionUser1];
  for (const user of users) {
    describe(`User ${user.auth.email}`, async () => {
      it('Create users (Auth)', async () => {
        const auth = apps.firebaseTestApp.auth;
        const userCredential = await assertSucceeds(firebaseAuth.createUserWithEmailAndPassword(auth, user.auth.email, user.auth.password));
        const db = apps.firebaseAdminTestApp.firestore;
        await assertSucceeds(db.collection('/emulator_user').doc(userCredential.user.uid).set({ email: userCredential.user.email, uid: userCredential.user.uid }));
        await firebaseAuth.signOut(auth);
      });
      it('Check user document has been created (Firestore)', async () => {
        await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
          const db = apps.firebaseTestApp.firestore;
          const userDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`)));
          checkUserDocumentCreated(userDoc, user, `/users/${userCredential.user.uid}`);
        });
      }).retries(20);
      it('Check user document has been created (Firestore)', async () => {
        await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
          const db = apps.firebaseTestApp.firestore;
          const userStatusDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/status/${userCredential.user.uid}`)));
          checkUserStatusDocumentCreated(userStatusDoc, `/users/${userCredential.user.uid}/status/${userCredential.user.uid}`);
        });
      }).retries(20);
      if (user.auth.email === data.testDeletionUser1.auth.email) {
        it('Delete users (Auth)', async () => {
          await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
            await assertSucceeds(userCredential.user.delete());
          });
        });
        it('Check user documents have been deleted (Admin/Firestore)', async () => {
          const db = apps.firebaseAdminTestApp.firestore;
          const uid = await getUidFromEmail(apps.firebaseAdminTestApp, user.auth.email);
          const userDoc = await assertSucceeds(db.collection('/users').doc(uid).get());
          expect(userDoc.exists, `Document '/users/${uid}' still exists`).to.be.false;
          const userStatusDoc = await assertSucceeds(db.collection(`/users/${uid}/status`).doc(uid).get());
          expect(userStatusDoc.exists, `Document '/users/${uid}/status/${uid}' still exists`).to.be.false;
        }).retries(20);
      }
      testUserProfileCompletion(apps, user);
    });
  }
}
