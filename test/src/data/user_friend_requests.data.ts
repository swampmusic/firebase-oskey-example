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

import { OSKTUserFriendRequest } from '@oskey-test/models';

import * as users from './users.data';
import * as testDeletionUsers from './test_deletion_users.data';

export const johnDoe: OSKTUserFriendRequest = {
    requester: users.johnDoe,
    friends: [users.janeDoe, users.kevinDoe, users.tiffDoe, users.cookieDoe, users.stanDoe],
    message: 'John would like to add you as a friend',
    toBeApproved: true,
};

export const janeDoe: OSKTUserFriendRequest = {
    requester: users.janeDoe,
    friends: [users.kevinDoe, users.tiffDoe, users.cookieDoe, users.stanDoe],
    message: 'Jane would like to add you as a friend',
    toBeApproved: true,
};

export const kevinDoe: OSKTUserFriendRequest = {
    requester: users.kevinDoe,
    friends: [users.tiffDoe, users.cookieDoe, users.stanDoe],
    message: 'Jane would like to add you as a friend',
    toBeApproved: true,
};

export const tiffDoe: OSKTUserFriendRequest = {
    requester: users.tiffDoe,
    friends: [users.cookieDoe, users.stanDoe],
    message: 'Jane would like to add you as a friend',
    toBeApproved: true,
};

export const cookieDoe: OSKTUserFriendRequest = {
    requester: users.cookieDoe,
    friends: [users.stanDoe],
    message: 'Jane would like to add you as a friend',
    toBeApproved: true,
};

export const billSmith: OSKTUserFriendRequest = {
    requester: users.billSmith,
    friends: [users.bradSmith, users.bobSmith],
    message: 'Bill would like to add you as a friend',
    toBeApproved: true,
};

export const bradSmith: OSKTUserFriendRequest = {
    requester: users.bradSmith,
    friends: [users.bobSmith],
    message: 'Brad would like to add you as a friend',
    toBeApproved: true,
};

export const bobSmith: OSKTUserFriendRequest = {
    requester: users.bradSmith,
    friends: [testDeletionUsers.user2],
    message: 'Bob would like to add you as a friend',
    toBeApproved: false,
};

export const testDeletionUser1: OSKTUserFriendRequest = {
    requester: testDeletionUsers.user1,
    friends: [testDeletionUsers.user2, testDeletionUsers.user3],
    message: 'Some message',
    toBeApproved: true,
};

export const testDeletionUser2: OSKTUserFriendRequest = {
    requester: testDeletionUsers.user2,
    friends: [users.johnDoe],
    message: 'Some message',
    toBeApproved: false,
};
