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

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { UserCredential } from 'firebase/auth';
import * as firebaseAuth from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';
import { assertSucceeds } from 'gp-firebase-emulator-unit-test';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

import { data } from '@oskey-test/data';
import { OSKTUnitTestApps, OSKTUser } from '@oskey-test/models';
import { checkField } from '@oskey-test/helpers';

function checkUserDocumentCreated(userDoc: firebaseFirestore.DocumentSnapshot, user: OSKTUser, documentPath: string) {
    expect(userDoc.exists(), `Missing document ${documentPath}`).to.be.true;

    const userData = userDoc.data();
    expect(userData, 'Missing data').to.exist;

    if (userData) {
        expect(userData.creationDate, 'Creation date is not yet set').to.exist;
        checkField(documentPath, 'email', 'string', userData.email, user.auth.email);

        expect(userData.publicProfile, 'Missing field publicProfile').to.exist;
        if (userData.publicProfile) {
            checkField(documentPath, 'publicProfile.firstName', 'string', userData.publicProfile.firstName, user.auth.email.split('@')[0]);
            checkField(documentPath, 'publicProfile.lastName', 'string', userData.publicProfile.lastName, '');
        }

        expect(userData.privateProfile, 'Missing field privateProfile').to.exist;

        // expect(userData.settings, 'Missing field settings').to.exist;
        // if (userData.settings) {
        //     expect(userData.settings.emailNotificationSettings, 'Missing field settings.emailNotificationSettings').to.exist;
        //     if (userData.settings.emailNotificationSettings) {
        //         checkField(documentPath, 'settings.emailNotificationSettings.onFriendRequestReceived', 'boolean', userData.settings.emailNotificationSettings.onFriendRequestReceived, false);
        //         checkField(documentPath, 'settings.emailNotificationSettings.onFriendRequestApproved', 'boolean', userData.settings.emailNotificationSettings.onFriendRequestApproved, false);
        //     }

        //     expect(userData.settings.pushNotificationSettings, 'Missing field settings.emailNotificationSettings').to.exist;
        //     if (userData.settings.pushNotificationSettings) {
        //         checkField(documentPath, 'settings.pushNotificationSettings.onFriendRequestReceived', 'boolean', userData.settings.pushNotificationSettings.onFriendRequestReceived, false);
        //         checkField(documentPath, 'settings.pushNotificationSettings.onFriendRequestApproved', 'boolean', userData.settings.pushNotificationSettings.onFriendRequestApproved, false);
        //     }
        // }
    }
}

function checkUserRecordUpdated(userAccount: UserRecord, user: OSKTUser) {
    expect(userAccount.displayName, `User ${userAccount.uid} display name is not updated`).to.equal(user.auth.email.split('@')[0]);
}

function checkUserStatusDocumentCreated(userStatusDoc: firebaseFirestore.DocumentSnapshot, documentPath: string) {
    expect(userStatusDoc.exists(), `Missing document ${documentPath}`).to.be.true;

    const userStatusData = userStatusDoc.data();
    expect(userStatusData, 'Missing data').to.exist;

    if (userStatusData) {
        expect(userStatusData.creationDate, 'Creation date is not yet set').to.exist;
        checkField(documentPath, 'isFirstTimeProfileCompletionRequired', 'boolean', userStatusData.isFirstTimeProfileCompletionRequired, true);
        checkField(documentPath, 'isProfileComplete', 'boolean', userStatusData.isProfileComplete, false);
    }
}

export function testUserCreation(apps: OSKTUnitTestApps) {
    const users = [...data.users, ...data.testDeletionUsers];
    for (const user of users) {
        describe(`User ${user.auth.email} creation`, async () => {
            it('Create users (Auth)', async () => {
                const auth = apps.firebaseTestApp.auth;
                const userCredential = await assertSucceeds(firebaseAuth.createUserWithEmailAndPassword(auth, user.auth.email, user.auth.password));
                const db = apps.firebaseAdminTestApp.firestore;
                await assertSucceeds(db.collection('/emulatorUsers').doc(user.auth.email).set({ userId: userCredential.user.uid }));
                await firebaseAuth.signOut(auth);
            });
            it('Validate email (Auth)', async () => {
                const auth = apps.firebaseAdminTestApp.auth;
                const userRecord = await assertSucceeds(auth.getUserByEmail(user.auth.email));
                await assertSucceeds(auth.updateUser(userRecord.uid, { emailVerified: true }));
                const updatedUserRecord = await assertSucceeds(auth.getUserByEmail(user.auth.email));
                expect(updatedUserRecord.emailVerified, 'User email is not verified').to.be.true;
            });
            it('Check user document has been created (Firestore)', async () => {
                await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                    const db = apps.firebaseTestApp.firestore;
                    const userDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`)));
                    checkUserDocumentCreated(userDoc, user, `/users/${userCredential.user.uid}`);
                });
            }).retries(500);
            if (user.id === users[0].id) {
                it('Check user status document has been created (Firestore)', async () => {
                    await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                        const db = apps.firebaseTestApp.firestore;
                        const userStatusDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/status/${userCredential.user.uid}`)));
                        checkUserStatusDocumentCreated(userStatusDoc, `/users/${userCredential.user.uid}/status/${userCredential.user.uid}`);
                    });
                }).retries(500);
                it('Check user account has been updated (Auth)', async () => {
                    const auth = apps.firebaseAdminTestApp.auth;
                    const userRecord = await assertSucceeds(auth.getUserByEmail(user.auth.email));
                    checkUserRecordUpdated(userRecord, user);
                }).retries(500);
            }
        });
    }
}
