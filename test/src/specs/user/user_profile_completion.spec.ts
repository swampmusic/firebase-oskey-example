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

import { it } from 'mocha';
import { expect } from 'chai';
import { UserCredential } from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';
import * as firebaseStorage from 'firebase/storage';
import { assertSucceeds } from 'gp-firebase-emulator-unit-test';
import * as crypto from 'crypto';
import * as path from 'path';
import * as os from 'os';
import * as child from 'child-process-promise';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { readFile } from 'fs/promises';

import { data } from '@oskey-test/data';
import { OSKTUnitTestApps, OSKTUser } from '@oskey-test/models';
import { checkFieldTimestamp, checkField, checkFieldStreetAddress } from '@oskey-test/helpers';

function checkUserDocumentUpdatedWithProfileImage(userDoc: firebaseFirestore.DocumentSnapshot, user: OSKTUser, documentPath: string) {
    expect(userDoc.exists(), `Missing document ${documentPath}`).to.be.true;

    const userData = userDoc.data();
    expect(userData, 'Missing data').to.exist;

    if (userData) {
        expect(userData.publicProfile, 'Missing field publicProfile').to.exist;
        if (userData.publicProfile) {
            if (user.profileImage?.filename) {
                expect(userData.publicProfile.profileImageFilename, 'Missing field publicProfile.profileImageFilename').to.exist;
                if (userData.publicProfile.profileImageFilename) {
                    checkField(documentPath, 'publicProfile.profileImageFilename', 'string', userData.publicProfile.profileImageFilename, user.profileImage?.filename);
                }
            }
        }
    }
}

function checkUserDocumentUpdatedWithFullDetails(userDoc: firebaseFirestore.DocumentSnapshot, user: OSKTUser, documentPath: string) {
    expect(userDoc.exists(), `Missing document ${documentPath}`).to.be.true;

    const userData = userDoc.data();
    expect(userData, 'Missing data').to.exist;

    if (userData) {
        expect(userData.publicProfile, 'Missing field publicProfile').to.exist;
        if (userData.publicProfile) {
            checkField(documentPath, 'publicProfile.firstName', 'string', userData.publicProfile.firstName, user.data.publicProfile.firstName);
            checkField(documentPath, 'publicProfile.lastName', 'string', userData.publicProfile.lastName, user.data.publicProfile.lastName);
            if (user.profileImage?.filename) {
                expect(userData.publicProfile.profileImageFilename, 'Missing field publicProfile.profileImageFilename').to.exist;
                if (userData.publicProfile.profileImageFilename) {
                    checkField(documentPath, 'publicProfile.profileImageFilename', 'string', userData.publicProfile.profileImageFilename, user.profileImage?.filename);
                }
            }
        }

        expect(userData.privateProfile, 'Missing field privateProfile').to.exist;
        if (userData.privateProfile) {
            if (user.data.privateProfile.dateOfBirth) {
                checkFieldTimestamp(documentPath, 'privateProfile.dateOfBirth', userData.privateProfile.dateOfBirth as firebaseFirestore.Timestamp | undefined, firebaseFirestore.Timestamp.fromDate(user.data.privateProfile.dateOfBirth));
            }
            if (user.data.privateProfile.streetAddress) {
                checkFieldStreetAddress(documentPath, 'privateProfile.streetAddress', userData.privateProfile.streetAddress, user.data.privateProfile.streetAddress);
            }
        }
    }
}

function checkUserStatusDocumentUpdated(userStatusDoc: firebaseFirestore.DocumentSnapshot, documentPath: string) {
    expect(userStatusDoc.exists(), `Missing document ${documentPath}`).to.be.true;

    const userStatusData = userStatusDoc.data();
    expect(userStatusData, 'Missing data').to.exist;

    if (userStatusData) {
        checkField(documentPath, 'isFirstTimeProfileCompletionRequired', 'boolean', userStatusData.isFirstTimeProfileCompletionRequired, false);
        checkField(documentPath, 'isProfileComplete', 'boolean', userStatusData.isProfileComplete, true);
    }
}

function checkUserRecordUpdated(userAccount: UserRecord, user: OSKTUser) {
    expect(userAccount.displayName, `User ${userAccount.uid} display name is not updated`).to.equal(`${user.data.publicProfile.lastName}, ${user.data.publicProfile.firstName}`);
}

export function testUserProfileCompletion(apps: OSKTUnitTestApps) {
    const users = [...data.users, ...data.testDeletionUsers];
    for (const user of users) {
        describe(`User ${user.auth.email}`, async () => {
            describe('Upload image and complete user profile', async () => {
                const userProfileImage = user.profileImage;
                if (userProfileImage) {
                    describe(`Upload profile picture '${path.basename(userProfileImage.filename)}'`, async () => {
                        it('Update profile image (Storage)', async () => {
                            await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                                const storage = apps.firebaseTestApp.storage;
                                const file = await readFile(userProfileImage.sourceFilename);
                                await assertSucceeds(firebaseStorage.uploadBytes(firebaseStorage.ref(storage, `users/${userCredential.user.uid}/public/profileImages/${userProfileImage.filename}`), file, { contentType: 'image/jpeg' }));
                            });
                        });
                        it('Check user document has been updated with profile image (Firestore)', async () => {
                            await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                                const db = apps.firebaseTestApp.firestore;
                                const userDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`)));
                                checkUserDocumentUpdatedWithProfileImage(userDoc, user, `/users/${userCredential.user.uid}`);
                            });
                        }).retries(500);
                        if (user.id === users[0].id) {
                            it('Check uploaded profile image (Storage)', async () => {
                                await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                                    const storage = apps.firebaseTestApp.storage;
                                    const file = await readFile(userProfileImage.sourceFilename);
                                    const originalSha256 = crypto.createHash('sha256').update(file).digest('base64');
                                    const downloadedFile = Buffer.from(await assertSucceeds(firebaseStorage.getBytes(firebaseStorage.ref(storage, `users/${userCredential.user.uid}/public/profileImages/${userProfileImage.filename}`))));
                                    const downloadedFileSha256 = crypto.createHash('sha256').update(downloadedFile).digest('base64');
                                    expect(originalSha256, 'File content do not match').to.equal(downloadedFileSha256);
                                });
                            }).retries(500);
                            it('Check generated profile image thumbnail (Storage)', async () => {
                                await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                                    const storage = apps.firebaseTestApp.storage;
                                    const tempFilePath = path.join(os.tmpdir(), path.basename(userProfileImage.sourceFilename));
                                    await child.spawn('convert', [userProfileImage.sourceFilename, '-thumbnail', '256x256!', tempFilePath]);
                                    const file = await readFile(tempFilePath);
                                    const originalSha256 = crypto.createHash('sha256').update(file).digest('base64');
                                    const downloadedFile = Buffer.from(await assertSucceeds(firebaseStorage.getBytes(firebaseStorage.ref(storage, `users/${userCredential.user.uid}/public/profileImages/thumbnails/${userProfileImage.filename}`))));
                                    const downloadedFileSha256 = crypto.createHash('sha256').update(downloadedFile).digest('base64');
                                    expect(originalSha256, 'File content do not match').to.equal(downloadedFileSha256);
                                });
                            }).retries(500);
                        }
                    });
                }
                describe('Complete user profile', async () => {
                    it('Complete user profile (Firestore)', async () => {
                        await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                            const db = apps.firebaseTestApp.firestore;
                            const updatedUserDoc = {
                                publicProfile: user.data.publicProfile,
                                privateProfile: user.data.privateProfile,
                            };
                            if (userProfileImage) {
                                updatedUserDoc.publicProfile = {
                                    ...updatedUserDoc.publicProfile,
                                    profileImageFilename: userProfileImage.filename,
                                };
                            }
                            await assertSucceeds(firebaseFirestore.setDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`), updatedUserDoc, { merge: true }));
                        });
                    });
                    it('Check user document has been updated with all details (Firestore)', async () => {
                        await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                            const db = apps.firebaseTestApp.firestore;
                            const userDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`)));
                            checkUserDocumentUpdatedWithFullDetails(userDoc, user, `/users/${userCredential.user.uid}`);
                        });
                    }).retries(500);
                    if (user.id === users[0].id) {
                        it('Check user status document has been updated (Firestore)', async () => {
                            await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                                const db = apps.firebaseTestApp.firestore;
                                const userStatusDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/status/${userCredential.user.uid}`)));
                                checkUserStatusDocumentUpdated(userStatusDoc, `/users/${userCredential.user.uid}/status/${userCredential.user.uid}`);
                            });
                        }).retries(500);
                        it('Check user account has been updated (Auth)', async () => {
                            const auth = apps.firebaseAdminTestApp.auth;
                            const userRecord = await assertSucceeds(auth.getUserByEmail(user.auth.email));
                            checkUserRecordUpdated(userRecord, user);
                        }).retries(500);
                    }
                });
            });
        });
    }
}
