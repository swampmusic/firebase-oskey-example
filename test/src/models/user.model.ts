/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { OSKAuth } from './auth.model';

export type OSKTDUser = {
  id: string
  auth: OSKAuth
  data?: {
    publicProfile: {
      displayName: string
    },
    privateProfile: {
      fullName: string
    }
  }
}
