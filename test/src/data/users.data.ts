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

// import * as crypto from 'crypto';

import * as streetAddresses from './street_addresses.data';

import { create as createUserCompanionDevice } from '../models/data/user_companion_device.model';
import { create as createUserDevice } from '../models/data/user_device.model';
import { OSKTUser } from '@oskey-test/models';

export const johnDoe: OSKTUser = {
    id: 'john-doe',
    auth: {
        // uid: "john-doe",
        email: 'john@example.com',
        password: 'Test+1234',
    },
    data: {
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.building1,
        },
        publicProfile: {
            firstName: 'John',
            lastName: 'DOE',
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/johnDoe.jpg',
    },
};

export const janeDoe: OSKTUser = {
    id: 'jane-doe',
    auth: {
        // uid: "jane-doe",
        email: 'jane@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Jane',
            lastName: 'DOE',
        },
        privateProfile: {
            dateOfBirth: new Date(1978, 5, 15),
            streetAddress: streetAddresses.building1,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/janeDoe.jpg',
    },
};

export const kevinDoe: OSKTUser = {
    id: 'kevin-doe',
    auth: {
        // uid: "kevin-doe",
        email: 'kevin@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Kevin',
            lastName: 'DOE',
        },
        privateProfile: {
            dateOfBirth: new Date(2013, 1, 27),
            streetAddress: streetAddresses.building1,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/kevinDoe.jpg',
    },
};

export const tiffDoe: OSKTUser = {
    id: 'tiff-doe',
    auth: {
        // uid: "coockie-doe",
        email: 'tiff@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Tiff',
            lastName: 'DOE',
        },
        privateProfile: {
            dateOfBirth: new Date(2013, 1, 27),
            streetAddress: streetAddresses.building1,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/tiffDoe.jpg',
    },
};

export const cookieDoe: OSKTUser = {
    id: 'cookie-doe',
    auth: {
        // uid: "coockie-doe",
        email: 'cookie@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Cookie',
            lastName: 'DOE',
        },
        privateProfile: {
            dateOfBirth: new Date(1943, 1, 27),
            streetAddress: streetAddresses.building3,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/coockieDoe.jpg',
    },
};

export const stanDoe: OSKTUser = {
    id: 'stan-doe',
    auth: {
        // uid: "coockie-doe",
        email: 'stan@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Stan',
            lastName: 'DOE',
        },
        privateProfile: {
            dateOfBirth: new Date(1973, 1, 27),
            streetAddress: streetAddresses.building3,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/stanDoe.jpg',
    },
};

export const billSmith: OSKTUser = {
    id: 'bill-smith',
    auth: {
        // uid: "bill-smith",
        email: 'bill@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Bill',
            lastName: 'SMITH',
        },
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.smithes,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/billSmith.jpg',
    },
};

export const bradSmith: OSKTUser = {
    id: 'brad-smith',
    auth: {
        // uid: "brad-smith",
        email: 'brad@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Bill',
            lastName: 'SMITH',
        },
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.smithes,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/bradSmith.jpg',
    },
};

export const bobSmith: OSKTUser = {
    id: 'bob-smith',
    auth: {
        // uid: "bob-smith",
        email: 'bob@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Bob',
            lastName: 'SMITH',
        },
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.smithes,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/bobSmith.jpg',
    },
};

export const joeThePlumber: OSKTUser = {
    id: 'joe-the-plumber',
    auth: {
        email: 'joe@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Joe',
            lastName: 'THE PLUMBER',
        },
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.smithes,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/joeThePlumber.jpg',
    },
};

export const jimOSKEY: OSKTUser = {
    id: 'jim-oskey',
    auth: {
        email: 'jim@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Jim',
            lastName: 'OSKEY',
        },
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.oskey,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/jimOskey.jpg',
    },
};

export const oliverSpark: OSKTUser = {
    id: 'oliver-spark',
    auth: {
        email: 'oliver@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Oliver',
            lastName: 'SPARK',
        },
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.sparks,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/oliverSpark.jpg',
    },
};

export const jennySpark: OSKTUser = {
    id: 'jenny-spark',
    auth: {
        email: 'jenny@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Jenny',
            lastName: 'SPARK',
        },
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.sparks,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/jennySpark.jpg',
    },
};

export const tomRent: OSKTUser = {
    id: 'tom-rent',
    auth: {
        email: 'tom@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Tom',
            lastName: 'RENT',
        },
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.rents,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/tomRent.jpg',
    },
};

export const helenRent: OSKTUser = {
    id: 'helen-rent',
    auth: {
        email: 'helen@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Helen',
            lastName: 'RENT',
        },
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.rents,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/helenRent.jpg',
    },
};

export const samRent: OSKTUser = {
    id: 'sam-rent',
    auth: {
        email: 'sam@example.com',
        password: 'Test+1234',
    },
    data: {
        publicProfile: {
            firstName: 'Sam',
            lastName: 'RENT',
        },
        privateProfile: {
            dateOfBirth: new Date(1979, 8, 29),
            streetAddress: streetAddresses.rents,
        },
    },
    devices: [createUserDevice({ id: 'test_device_1', name: 'My phone', type: 'mobile', companionDevices: [createUserCompanionDevice({ id: 'test_companion_device_1', name: 'My watch' })] })],
    profileImage: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/user_profile_images/samRent.jpg',
    },
};
