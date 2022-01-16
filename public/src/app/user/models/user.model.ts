/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { OSKUserPrivateProfile } from './user-private-profile.model';
import { OSKUserPublicProfile } from './user-public-profile.model';

export interface OSKUser {
  userId: string;
  email: string;
  creationDate: Date;
  publicProfile: OSKUserPublicProfile;
  privateProfile: OSKUserPrivateProfile;
}
