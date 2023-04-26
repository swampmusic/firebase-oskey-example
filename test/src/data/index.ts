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

import { OSKTAccessControlDevice, OSKTBuilding, OSKTOrganization, OSKTUser, OSKTUserFriendRequest, OSKTUserInvitation } from '@oskey-test/models';

import * as accessControlDevices from './access_control_devices.data';
import * as buildings from './buildings.data';
import * as organizations from './organizations.data';
import * as testDeletionUsers from './test_deletion_users.data';
import * as users from './users.data';
import * as userFriendRequests from './user_friend_requests.data';
import * as userInvitations from './user_invitations.data';

const accessControlDeviceArray: OSKTAccessControlDevice[] = [
    // accessControlDevices.building1Door1AccessControlDevice1,
    accessControlDevices.building1Door1AccessControlDevice2,
    accessControlDevices.building1Door1AccessControlDevice3,
    // accessControlDevices.building1Door2accessControlDevice1,
    accessControlDevices.building1Door2AccessControlDevice2,
    accessControlDevices.building1Door2AccessControlDevice3,
    accessControlDevices.building2Door1AccessControlDevice2,
    accessControlDevices.building2Door2AccessControlDevice2,
    accessControlDevices.building3Door1AccessControlDevice2,
    accessControlDevices.building3Door2AccessControlDevice2,
];

const buildingArray: OSKTBuilding[] = [buildings.building1, buildings.building2, buildings.building3];

const organizationArray: OSKTOrganization[] = [organizations.oskey, organizations.acme_sparks, organizations.acme_rents, organizations.acme_locks, organizations.acme_subs];

const testDeletionUserArray: OSKTUser[] = [testDeletionUsers.user1, testDeletionUsers.user2, testDeletionUsers.user3];

const regularUserArray: OSKTUser[] = [users.johnDoe, users.janeDoe, users.kevinDoe, users.tiffDoe, users.cookieDoe, users.stanDoe];

const proUserArray: OSKTUser[] = [users.billSmith, users.bradSmith, users.bobSmith, users.joeThePlumber, users.jimOSKEY, users.oliverSpark, users.jennySpark, users.tomRent, users.helenRent, users.samRent];

const userArray: OSKTUser[] = [...regularUserArray, ...proUserArray];

const userInvitiationArray: OSKTUserInvitation[] = [userInvitations.johnDoeInvitation1, userInvitations.johnDoeInvitation2, userInvitations.johnDoeInvitation3, userInvitations.billSmithInvitation1, userInvitations.stanDoeInvitation1];

const userFriendRequestArray: OSKTUserFriendRequest[] = [
    userFriendRequests.johnDoe,
    userFriendRequests.janeDoe,
    userFriendRequests.kevinDoe,
    userFriendRequests.tiffDoe,
    userFriendRequests.cookieDoe,
    userFriendRequests.billSmith,
    userFriendRequests.bradSmith,
    userFriendRequests.bobSmith,
    userFriendRequests.testDeletionUser1,
    userFriendRequests.testDeletionUser2,
];

export const data = {
    // dadUser: users.johnDoe,
    // momUser: users.janeDoe,
    // kidUser1: users.kevinDoe,
    // kidUser2: users.tiffDoe,
    // proUser1: users.billSmith,
    // proUser2: users.bradSmith,
    admin: users.jimOSKEY,
    testDeletionUser1: testDeletionUsers.user1,
    testDeletionUser2: testDeletionUsers.user2,
    testDeletionUser3: testDeletionUsers.user3,
    users: userArray,
    proUsers: proUserArray,
    regularUsers: regularUserArray,
    testDeletionUsers: testDeletionUserArray,
    accessControlDevices: accessControlDeviceArray,
    buildings: buildingArray,
    organizations: organizationArray,
    userFriendRequests: userFriendRequestArray,
    userInvitations: userInvitiationArray,
};
