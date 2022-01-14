/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { OSKTDUser } from '../models/user.model';

const johnDoe: OSKTDUser = {
  id: 'john-doe',
  auth: {
    email: 'john.doe@oskey.dbg',
    password: 'Test+1234'
  },
  data: {
    privateProfile: {
      fullName: 'John DOE'
    },
    publicProfile: {
      displayName: 'John D.'
    }
  }
};

const testDeletionUser1: OSKTDUser = {
  id: 'test-deletion-1',
  auth: {
    // uid: "test-deletion-1",
    email: 'test.deletion.1@oskey.dbg',
    password: 'Test+1234'
  }
};

const users = [johnDoe];

export const data = {
  testDeletionUser1: testDeletionUser1,
  users: users
};
