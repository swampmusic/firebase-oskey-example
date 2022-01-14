/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { firestore } from 'firebase-admin';

import { OSKUserPublicProfileModel } from './user_public_profile.model';
import { OSKUserPrivateProfileModel } from './user_private_profile.model';

export interface OSKUserDocument {
  userId: string;
  email: string;
  publicProfile: OSKUserPublicProfileModel;
  privateProfile: OSKUserPrivateProfileModel;
  creationDate: firestore.Timestamp;
}
