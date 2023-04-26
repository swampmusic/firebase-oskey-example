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
import { assertFails, assertSucceeds } from 'gp-firebase-emulator-unit-test';
import { readFile } from 'fs/promises';
import * as crypto from 'crypto';
import * as path from 'path';
import * as os from 'os';
import * as child from 'child-process-promise';

import { data } from '@oskey-test/data';
import { checkFieldTimestamp, checkField, checkFieldStreetAddress } from '@oskey-test/helpers';
import { OSKTUnitTestApps, OSKTUser } from '@oskey-test/models';

import { OSKUserDocument } from '@oskey/user';

function checkUserDocumentUpdated(userDoc: firebaseFirestore.DocumentSnapshot, user: OSKTUser, filename: string | undefined, documentPath: string) {
    expect(userDoc.exists(), `Missing document ${documentPath}`).to.be.true;

    const userData = userDoc.data();
    expect(userData, 'Missing data').to.exist;

    if (userData) {
        expect(userData.publicProfile, 'Missing field publicProfile').to.exist;
        if (userData.publicProfile) {
            checkField(documentPath, 'publicProfile.firstName', 'string', userData.publicProfile.firstName, user.data.publicProfile.firstName.toLowerCase());
            checkField(documentPath, 'publicProfile.lastName', 'string', userData.publicProfile.lastName, user.data.publicProfile.lastName.toLowerCase());
            if (filename) {
                expect(userData.publicProfile.profileImageFilename, 'Missing field publicProfile.profileImageFilename').to.exist;
                if (userData.publicProfile.profileImageFilename) {
                    checkField(documentPath, 'publicProfile.profileImageFilename', 'string', userData.publicProfile.profileImageFilename, filename);
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

export function testUserProfileUpdate(apps: OSKTUnitTestApps) {
    const users = [...data.users, data.testDeletionUser2, data.testDeletionUser3];
    for (const user of users) {
        describe(`User ${user.auth.email} profile update`, async () => {
            const filename = `${crypto.randomUUID()}.jpg`;
            if (user.profileImage) {
                const userProfileImage = user.profileImage;
                describe(`Upload profile picture '${filename}'`, async () => {
                    it('Update profile image (Storage)', async () => {
                        await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                            const storage = apps.firebaseTestApp.storage;
                            const file = await readFile(userProfileImage.sourceFilename);
                            await assertSucceeds(firebaseStorage.uploadBytes(firebaseStorage.ref(storage, `users/${userCredential.user.uid}/public/profileImages/${filename}`), file, { contentType: 'image/jpeg' }));
                        });
                    });
                    it('Check uploaded profile image (Storage)', async () => {
                        await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                            const storage = apps.firebaseTestApp.storage;
                            const file = await readFile(userProfileImage.sourceFilename);
                            const originalSha256 = crypto.createHash('sha256').update(file).digest('base64');
                            const downloadedFile = Buffer.from(await assertSucceeds(firebaseStorage.getBytes(firebaseStorage.ref(storage, `users/${userCredential.user.uid}/public/profileImages/${filename}`))));
                            const downloadedFileSha256 = crypto.createHash('sha256').update(downloadedFile).digest('base64');
                            expect(originalSha256, 'File content do not match').to.equal(downloadedFileSha256);
                        });
                    }).retries(500);
                    if (user.id === users[0].id) {
                        it('Check generated profile image thumbnail (Storage)', async () => {
                            await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                                const storage = apps.firebaseTestApp.storage;
                                const tempFilePath = path.join(os.tmpdir(), path.basename(userProfileImage.sourceFilename));
                                await child.spawn('convert', [userProfileImage.sourceFilename, '-thumbnail', '256x256!', tempFilePath]);
                                const file = await readFile(tempFilePath);
                                const originalSha256 = crypto.createHash('sha256').update(file).digest('base64');
                                const downloadedFile = Buffer.from(await assertSucceeds(firebaseStorage.getBytes(firebaseStorage.ref(storage, `users/${userCredential.user.uid}/public/profileImages/thumbnails/${filename}`))));
                                const downloadedFileSha256 = crypto.createHash('sha256').update(downloadedFile).digest('base64');
                                expect(originalSha256, 'File content do not match').to.equal(downloadedFileSha256);
                            });
                        }).retries(500);
                    }
                });
            }
            describe('Update user profile', async () => {
                it('Update user profile (Firestore)', async () => {
                    await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                        const db = apps.firebaseTestApp.firestore;
                        const oldUserDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`)));
                        const oldUser = oldUserDoc.data() as OSKUserDocument;
                        const updatedUser = {
                            publicProfile: { ...oldUser.publicProfile, firstName: oldUser.publicProfile.firstName.toLowerCase(), lastName: oldUser.publicProfile.lastName.toLowerCase() },
                        };
                        if (user.profileImage) {
                            updatedUser.publicProfile.profileImageFilename = filename;
                        }
                        await assertSucceeds(firebaseFirestore.setDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`), updatedUser, { merge: true }));
                    });
                });
                it('Check user document has been updated (Firestore)', async () => {
                    await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                        const db = apps.firebaseTestApp.firestore;
                        const userDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`)));
                        checkUserDocumentUpdated(userDoc, user, user.profileImage?.filename ? filename : undefined, `/users/${userCredential.user.uid}`);
                    });
                }).retries(500);
                if (user.id === users[0].id) {
                    if (user.profileImage) {
                        const userProfileImage = user.profileImage;
                        it('Check old user profile image has been deleted (Storage)', async () => {
                            await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                                const storage = apps.firebaseTestApp.storage;
                                await assertFails(firebaseStorage.getBytes(firebaseStorage.ref(storage, `users/${userCredential.user.uid}/public/profileImages/${userProfileImage.filename}`)));
                            });
                        }).retries(500);
                        it('Check old user profile image thumbnail has been deleted (Storage)', async () => {
                            await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                                const storage = apps.firebaseTestApp.storage;
                                await assertFails(firebaseStorage.getBytes(firebaseStorage.ref(storage, `users/${userCredential.user.uid}/public/profileImages/thumbnails/${userProfileImage.filename}`)));
                            });
                        }).retries(500);
                    }
                }
            });
        });
        describe(`User ${user.auth.email} profile restore`, async () => {
            it('Restore user profile (Firestore)', async () => {
                await apps.firebaseTestApp.runAuthenticated(user.auth.email, user.auth.password, async (userCredential: UserCredential) => {
                    const db = apps.firebaseTestApp.firestore;
                    const oldUserDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`)));
                    const oldUser = oldUserDoc.data() as OSKUserDocument;
                    const updatedUser = {
                        publicProfile: { ...oldUser.publicProfile, firstName: user.data.publicProfile.firstName, lastName: user.data.publicProfile.lastName },
                    };
                    await assertSucceeds(firebaseFirestore.setDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`), updatedUser, { merge: true }));
                });
            });
        });
    }
}
