/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { GPFirebaseEmulatorAdminTestApp } from 'gp-firebase-emulator-unit-test';

export async function getUidFromEmail(firebaseAdminTestApp: GPFirebaseEmulatorAdminTestApp, email: string): Promise<string> {
  const db = firebaseAdminTestApp.firestore;
  const docs = (await (await db.collection('/emulator_user').where('email', '==', email).get()).docs);

  if (docs.length === 1) return docs[0].data().uid as string;
  else if (docs.length === 0) throw Error(`No user could be found for email '${email}''`);
  else throw Error(`${docs.length} users found for email '${email}''`);
}
