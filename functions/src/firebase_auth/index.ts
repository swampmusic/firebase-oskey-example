/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { OSKUserAccountController } from './controllers/user_account.controller';

export class OSKFirebaseAuthModule {
  static userAccountController: OSKUserAccountController = new OSKUserAccountController();
}
