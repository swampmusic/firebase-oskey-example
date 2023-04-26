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

import { after, afterEach, before, describe, run } from 'mocha';
import { GPFirebaseEmulatorTestAppOption, initAdminTestApp, initTestApp, sleep } from 'gp-firebase-emulator-unit-test';
import { readFile } from 'fs/promises';

import { OSKTUnitTestApps } from '@oskey-test/models';
import { data } from '@oskey-test/data';
import * as specs from '@oskey-test/specs';
import { getUidFromEmail } from './helpers';

async function init(): Promise<OSKTUnitTestApps> {
    const options = JSON.parse((await readFile('./config.json')).toString()) as GPFirebaseEmulatorTestAppOption;
    const firebaseTestApp = await initTestApp(options);
    const firebaseAdminTestApp = await initAdminTestApp(options);

    return { firebaseTestApp: firebaseTestApp, firebaseAdminTestApp: firebaseAdminTestApp, config: options };
}

async function prepareUnitTests(apps: OSKTUnitTestApps) {
    before('Cleanup', async () => {
        console.info('Environment');
        console.info(process.env);
        console.info('Deactivate background triggers...');
        await apps.firebaseAdminTestApp.disableBackgroundTriggers();
        await sleep(2000);
        console.info('Delete all users...');
        await apps.firebaseAdminTestApp.clearAllAuthData();
        await sleep(1000);
        console.info('Delete all data...');
        await apps.firebaseAdminTestApp.clearAllFirestoreData();
        await sleep(1000);
        console.log('Delete all stored files');
        const storage = await apps.firebaseAdminTestApp.storage;
        await storage.bucket().deleteFiles({ prefix: 'buildings/', force: true });
        await storage.bucket().deleteFiles({ prefix: 'users/', force: true });
        console.info('Re-activate background triggers...');
        await apps.firebaseAdminTestApp.enableBackgroundTriggers();
        await sleep(2000);
        console.info('Ready !!!');
        console.info('');
    });

    afterEach(async () => {
        await sleep(100);
    });

    describe('User creation', async () => {
        specs.testUserCreation(apps);
    });

    describe('User profile completion', async () => {
        specs.testUserProfileCompletion(apps);
    });

    describe('User deletion', async () => {
        specs.testUserDeletion(apps);
    });

    // Post test modification
    after('Post unit test', async () => {
        // const db = apps.firebaseAdminTestApp.firestore;
        const auth = apps.firebaseAdminTestApp.auth;

        // Remove email validation
        console.log('Remove email validation');
        for (const user of data.users) {
            const userId = await getUidFromEmail(apps.firebaseAdminTestApp, user.auth.email);
            console.log(`  - User: ${userId}`);
            auth.updateUser(userId, { emailVerified: false });
        }
    });
}

init()
    .then(prepareUnitTests)
    .then(() => run());
