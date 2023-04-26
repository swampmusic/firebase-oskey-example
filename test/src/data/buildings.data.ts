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

import * as accessControlDevices from './access_control_devices.data';
import * as streetAddresses from './street_addresses.data';
import * as testDeletionUsers from './test_deletion_users.data';
import * as users from './users.data';

import { OSKTBuildingDoor, OSKTBuildingUnit, OSKTBuilding } from '@oskey-test/models';

// export const now = new Date();
// export const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 1);
// export const nextWeek = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 7);

export const building1Door1: OSKTBuildingDoor = {
    id: 'door-1',
    data: {
        name: 'Street door',
        streetAddress: streetAddresses.building1,
    },
    accessControlDevices: [/* accessControlDevices.building1Door1AccessControlDevice1, */ accessControlDevices.building1Door1AccessControlDevice2, accessControlDevices.building1Door1AccessControlDevice3],
};

export const building1Door2: OSKTBuildingDoor = {
    id: 'door-2',
    data: {
        name: 'Intermediate door',
        streetAddress: streetAddresses.building1,
    },
    accessControlDevices: [/* accessControlDevices.building1Door2accessControlDevice1, */ accessControlDevices.building1Door2AccessControlDevice2, accessControlDevices.building1Door2AccessControlDevice3],
};

export const building2Door1: OSKTBuildingDoor = {
    id: 'door-1',
    data: {
        name: 'Street door',
        streetAddress: streetAddresses.building2,
    },
    accessControlDevices: [accessControlDevices.building2Door1AccessControlDevice2],
};

export const building2Door2: OSKTBuildingDoor = {
    id: 'door-2',
    data: {
        name: 'Intermediate door',
        streetAddress: streetAddresses.building2,
    },
    accessControlDevices: [accessControlDevices.building2Door2AccessControlDevice2],
};

export const building3Door1: OSKTBuildingDoor = {
    id: 'door-1',
    data: {
        name: 'Street door',
        streetAddress: streetAddresses.building2,
    },
    accessControlDevices: [accessControlDevices.building3Door1AccessControlDevice2],
};

export const building3Door2: OSKTBuildingDoor = {
    id: 'door-2',
    data: {
        name: 'Intermediate door',
        streetAddress: streetAddresses.building2,
    },
    accessControlDevices: [accessControlDevices.building3Door2AccessControlDevice2],
};

// export const building1Door3: OSKTBuildingDoor = {
//   id: 'door-3',
//   data: {
//     name: 'Garage (inside)',
//     streetAddress: streetAddresses.building1StreetAddress
//   },
//   accessControlDevices: [building1door3accessControlDevice1]
// };

// export const building1Door4: OSKTBuildingDoor = {
//   id: 'door-4',
//   data: {
//     name: 'Laundy',
//     streetAddress: streetAddresses.building1StreetAddress
//   },
//   accessControlDevices: [building1door4accessControlDevice1]
// };

export const building1Unit1A: OSKTBuildingUnit = {
    id: 'unit-1-a',
    data: {
        name: 'The Doe',
        floor: '1',
        unitNumber: 'A',
    },
    doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
    managers: [users.johnDoe, users.janeDoe],
    users: [users.kevinDoe, users.tiffDoe],
    guests: [
        /* coockieDoe */
    ],
};

export const building1Unit1B: OSKTBuildingUnit = {
    id: 'unit-1-b',
    data: {
        name: 'No tenant',
        floor: '1',
        unitNumber: 'B',
    },
    doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
    managers: [],
    users: [],
    guests: [],
};

export const building1Unit1C: OSKTBuildingUnit = {
    id: 'unit-1-c',
    data: {
        name: 'No tenant',
        floor: '1',
        unitNumber: 'C',
    },
    doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
    managers: [],
    users: [],
    guests: [],
};

export const building1Unit2A: OSKTBuildingUnit = {
    id: 'unit-2-a',
    data: {
        name: 'No tenant',
        floor: '2',
        unitNumber: 'A',
    },
    doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
    managers: [],
    users: [],
    guests: [],
};

export const building1Unit2B: OSKTBuildingUnit = {
    id: 'unit-2-b',
    data: {
        name: 'No tenant',
        floor: '2',
        unitNumber: 'B',
    },
    doors: [building1Door1, building1Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building1Unit2C: OSKTBuildingUnit = {
    id: 'unit-2-c',
    data: {
        name: 'No tenant',
        floor: '2',
        unitNumber: 'C',
    },
    doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
    managers: [],
    users: [],
    guests: [],
};

export const building1Unit3A: OSKTBuildingUnit = {
    id: 'unit-3-a',
    data: {
        name: 'No tenant',
        floor: '3',
        unitNumber: 'A',
    },
    doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
    managers: [],
    users: [],
    guests: [],
};

export const building1Unit3B: OSKTBuildingUnit = {
    id: 'unit-3-b',
    data: {
        name: 'No tenant',
        floor: '3',
        unitNumber: 'B',
    },
    doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
    managers: [],
    users: [],
    guests: [],
};

export const building1Unit3C: OSKTBuildingUnit = {
    id: 'unit-3-c',
    data: {
        name: 'No tenant',
        floor: '3',
        unitNumber: 'C',
    },
    doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
    managers: [],
    users: [],
    guests: [],
};

export const building2Unit1A: OSKTBuildingUnit = {
    id: 'unit-1-a',
    data: {
        name: 'The Deletion',
        floor: '1',
        unitNumber: 'A',
    },
    doors: [building2Door1, building2Door2],
    managers: [testDeletionUsers.user2],
    users: [testDeletionUsers.user3],
    guests: [
        /* coockieDoe */
    ],
};

export const building2Unit1B: OSKTBuildingUnit = {
    id: 'unit-1-b',
    data: {
        name: 'The Doe',
        floor: '1',
        unitNumber: 'B',
    },
    doors: [building2Door1, building2Door2],
    managers: [users.johnDoe, users.janeDoe],
    users: [],
    guests: [],
};

export const building2Unit1C: OSKTBuildingUnit = {
    id: 'unit-1-c',
    data: {
        name: 'No tenant',
        floor: '1',
        unitNumber: 'C',
    },
    doors: [building2Door1, building2Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building2Unit2A: OSKTBuildingUnit = {
    id: 'unit-2-a',
    data: {
        name: 'No tenant',
        floor: '2',
        unitNumber: 'A',
    },
    doors: [building2Door1, building2Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building2Unit2B: OSKTBuildingUnit = {
    id: 'unit-2-b',
    data: {
        name: 'No tenant',
        floor: '2',
        unitNumber: 'B',
    },
    doors: [building2Door1, building2Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building2Unit2C: OSKTBuildingUnit = {
    id: 'unit-2-c',
    data: {
        name: 'No tenant',
        floor: '2',
        unitNumber: 'C',
    },
    doors: [building2Door1, building2Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building2Unit3A: OSKTBuildingUnit = {
    id: 'unit-3-a',
    data: {
        name: 'No tenant',
        floor: '3',
        unitNumber: 'A',
    },
    doors: [building2Door1, building2Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building2Unit3B: OSKTBuildingUnit = {
    id: 'unit-3-b',
    data: {
        name: 'No tenant',
        floor: '3',
        unitNumber: 'B',
    },
    doors: [building2Door1, building2Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building2Unit3C: OSKTBuildingUnit = {
    id: 'unit-3-c',
    data: {
        name: 'No tenant',
        floor: '3',
        unitNumber: 'C',
    },
    doors: [building2Door1, building2Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building3Unit1A: OSKTBuildingUnit = {
    id: 'unit-1-a',
    data: {
        name: 'The Old Doe',
        floor: '1',
        unitNumber: 'A',
    },
    doors: [building3Door1, building3Door2],
    managers: [users.cookieDoe, users.stanDoe],
    users: [],
    guests: [],
};

export const building3Unit1B: OSKTBuildingUnit = {
    id: 'unit-1-b',
    data: {
        name: 'No tenant',
        floor: '1',
        unitNumber: 'B',
    },
    doors: [building2Door1, building2Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building3Unit1C: OSKTBuildingUnit = {
    id: 'unit-1-c',
    data: {
        name: 'No tenant',
        floor: '1',
        unitNumber: 'C',
    },
    doors: [building3Door1, building3Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building3Unit2A: OSKTBuildingUnit = {
    id: 'unit-2-a',
    data: {
        name: 'No tenant',
        floor: '2',
        unitNumber: 'A',
    },
    doors: [building3Door1, building3Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building3Unit2B: OSKTBuildingUnit = {
    id: 'unit-2-b',
    data: {
        name: 'No tenant',
        floor: '2',
        unitNumber: 'B',
    },
    doors: [building3Door1, building3Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building3Unit2C: OSKTBuildingUnit = {
    id: 'unit-2-c',
    data: {
        name: 'No tenant',
        floor: '2',
        unitNumber: 'C',
    },
    doors: [building3Door1, building3Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building3Unit3A: OSKTBuildingUnit = {
    id: 'unit-3-a',
    data: {
        name: 'No tenant',
        floor: '3',
        unitNumber: 'A',
    },
    doors: [building3Door1, building3Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building3Unit3B: OSKTBuildingUnit = {
    id: 'unit-3-b',
    data: {
        name: 'No tenant',
        floor: '3',
        unitNumber: 'B',
    },
    doors: [building3Door1, building3Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building3Unit3C: OSKTBuildingUnit = {
    id: 'unit-3-c',
    data: {
        name: 'No tenant',
        floor: '3',
        unitNumber: 'C',
    },
    doors: [building3Door1, building3Door2],
    managers: [],
    users: [],
    guests: [],
};

export const building1: OSKTBuilding = {
    id: 'building-1',
    data: {
        name: 'Residence La Prueba',
        isHiddenFromPublicSearch: false,
        streetAddress: streetAddresses.building1,
    },
    doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
    units: [building1Unit1A, building1Unit1B, building1Unit1C, building1Unit2A, building1Unit2B, building1Unit2C, building1Unit3A, building1Unit3B, building1Unit3C],
    // managers: [users.billSmith],
    // users: [users.bradSmith],
    // guests: [
    //     /* bobSmith */
    // ],
    admins: [users.tomRent],
    users: [
        { user: users.billSmith, roles: [{ type: 'composite', roleId: 'v1.org.building.manager' }], accessRights: [{ validity: 'permanent' }] },
        { user: users.bradSmith, roles: [{ type: 'composite', roleId: 'v1.org.building.user' }], accessRights: [{ validity: 'permanent' }] },
        { user: users.bobSmith, roles: [{ type: 'composite', roleId: 'v1.org.building.guest' }], accessRights: [{ validity: 'permanent' }] },
    ],
    image: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/building_images/building.jpg',
    },
};

export const building2: OSKTBuilding = {
    id: 'building-2',
    data: {
        name: 'Residence Les Tests',
        isHiddenFromPublicSearch: false,
        streetAddress: streetAddresses.building2,
    },
    doors: [building2Door1, building2Door2 /* , building1Door3, building1Door4 */],
    units: [building2Unit1A, building2Unit1B, building2Unit1C, building2Unit2A, building2Unit2B, building2Unit2C, building2Unit3A, building2Unit3B, building2Unit3C],
    // managers: [users.billSmith],
    // users: [users.bradSmith],
    // guests: [
    //     /* bobSmith */
    // ],
    admins: [users.tomRent],
    users: [
        { user: users.billSmith, roles: [{ type: 'composite', roleId: 'v1.org.building.manager' }], accessRights: [{ validity: 'permanent' }] },
        { user: users.bradSmith, roles: [{ type: 'composite', roleId: 'v1.org.building.user' }], accessRights: [{ validity: 'permanent' }] },
        { user: users.bobSmith, roles: [{ type: 'composite', roleId: 'v1.org.building.guest' }], accessRights: [{ validity: 'permanent' }] },
    ],
    image: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/building_images/building.jpg',
    },
};

export const building3: OSKTBuilding = {
    id: 'building-3',
    data: {
        name: 'Residence Les essais',
        isHiddenFromPublicSearch: false,
        streetAddress: streetAddresses.building2,
    },
    doors: [building3Door1, building3Door2 /* , building1Door3, building1Door4 */],
    units: [building3Unit1A, building3Unit1B, building3Unit1C, building3Unit2A, building3Unit2B, building3Unit2C, building3Unit3A, building3Unit3B, building3Unit3C],
    // managers: [users.billSmith],
    // users: [users.bradSmith],
    // guests: [
    //     /* bobSmith */
    // ],
    admins: [users.tomRent],
    users: [
        { user: users.billSmith, roles: [{ type: 'composite', roleId: 'v1.org.building.manager' }], accessRights: [{ validity: 'permanent' }] },
        { user: users.bradSmith, roles: [{ type: 'composite', roleId: 'v1.org.building.user' }], accessRights: [{ validity: 'permanent' }] },
        { user: users.bobSmith, roles: [{ type: 'composite', roleId: 'v1.org.building.guest' }], accessRights: [{ validity: 'permanent' }] },
    ],
    image: {
        filename: '9505d1da-dcba-4646-a3e6-fff39479bcd9.jpg',
        sourceFilename: 'assets/building_images/building.jpg',
    },
};
