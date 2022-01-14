/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { afterEach, before, describe, run } from 'mocha';
import { GPFirebaseEmulatorTestAppOption, initAdminTestApp, initTestApp, sleep } from 'gp-firebase-emulator-unit-test';
import { readFile } from 'fs/promises';

import { OSKUnitTestApps } from './models/unit_test_apps.model';

import * as specs from './specs';

async function init(): Promise<OSKUnitTestApps> {
  const options = JSON.parse((await readFile('./config.json')).toString()) as GPFirebaseEmulatorTestAppOption;
  const firebaseTestApp = await initTestApp(options);
  const firebaseAdminTestApp = await initAdminTestApp(options);

  return { firebaseTestApp: firebaseTestApp, firebaseAdminTestApp: firebaseAdminTestApp };
}

async function prepareUnitTests(apps: OSKUnitTestApps) {
  // Step 1: Declare before step (which cleans data and users)
  before('Cleanup', async () => {
    console.info('Deactivate background triggers...');
    await apps.firebaseAdminTestApp.disableBackgroundTriggers();
    await sleep(2000);
    console.info('Delete all users...');
    await apps.firebaseAdminTestApp.cleanAllUsers();
    await sleep(1000);
    console.info('Delete all data...');
    await apps.firebaseAdminTestApp.cleanAllData();
    await sleep(1000);
    console.info('Re-activate background triggers...');
    await apps.firebaseAdminTestApp.enableBackgroundTriggers();
    await sleep(2000);
    console.info('Ready !!!');
    console.info('');
  });

  afterEach(async () => { await sleep(500); });

  describe('User creation', async () => { specs.testUserCreation(apps); });
}

/**
 * This is the main loop. Trigger the initialization, then run the test
 */
init()
  .then(prepareUnitTests)
  .then(() => run());
