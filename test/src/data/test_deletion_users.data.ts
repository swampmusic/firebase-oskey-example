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

import * as streetAddresses from './street_addresses.data';

import { OSKTUser } from '@oskey-test/models';
import { create as createUserCompanionDevice } from '../models/data/user_companion_device.model';
import { create as createUserDevice } from '../models/data/user_device.model';

export const user1: OSKTUser = {
    id: 'test-deletion-1',
    auth: {
        // uid: "test-deletion-1",
        email: 'test.deletion.1@example.com',
        password: 'Test+1234',
    },
    data: {
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.building2,
        },
        publicProfile: {
            firstName: 'Test',
            lastName: 'DELETION 1',
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/testDeletionUser.jpg',
    },
};

export const user2: OSKTUser = {
    id: 'test-deletion-2',
    auth: {
        // uid: "test-deletion-1",
        email: 'test.deletion.2@example.com',
        password: 'Test+1234',
    },
    data: {
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.building2,
        },
        publicProfile: {
            firstName: 'Test',
            lastName: 'DELETION 2',
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/testDeletionUser.jpg',
    },
};

export const user3: OSKTUser = {
    id: 'test-deletion-3',
    auth: {
        // uid: "test-deletion-1",
        email: 'test.deletion.3@example.com',
        password: 'Test+1234',
    },
    data: {
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.building2,
        },
        publicProfile: {
            firstName: 'Test',
            lastName: 'DELETION 3',
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/testDeletionUser.jpg',
    },
};
