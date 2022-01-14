/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { firestore } from 'firebase-admin';

export interface OSKUserStatusDocument {
  isProfileComplete: boolean;
  creationDate: firestore.Timestamp;
}
