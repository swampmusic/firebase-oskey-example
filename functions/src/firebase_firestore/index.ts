/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { OSKUserController } from './controllers/user.controller';

export class OSKFirebaseFirestoreModule {
  static userController = new OSKUserController();
}
