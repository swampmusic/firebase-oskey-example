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

import * as users from './users.data';
import * as buildings from './buildings.data';

import { OSKTUserInvitation } from '@oskey-test/models';

const now = new Date();
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 1);
const nextWeek = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 7);

export const johnDoeInvitation1: OSKTUserInvitation = {
    id: 'invitation-1',
    accessId: `${buildings.building1.id}_${buildings.building1Unit1A.id}`,
    data: {
        buildingId: buildings.building1,
        unitId: buildings.building1Unit1A,
        title: 'B-day of Tiff !!!',
        notes: 'Bring a nice gift',
        startDate: new Date(nextWeek.getFullYear(), nextWeek.getMonth(), nextWeek.getDay(), 16, 0),
        endDate: new Date(nextWeek.getFullYear(), nextWeek.getMonth(), nextWeek.getDay(), 18, 0),
        accessRights: [
            {
                validity: 'oneTime',
            },
        ],
    },
    inviter: users.johnDoe,
    doors: [buildings.building1Door1, buildings.building1Door2],
    invitees: [users.stanDoe, users.cookieDoe],
};

export const johnDoeInvitation2: OSKTUserInvitation = {
    id: 'invitation-2',
    accessId: `${buildings.building1.id}_${buildings.building1Unit1A.id}`,
    data: {
        buildingId: buildings.building1,
        unitId: buildings.building1Unit1A,
        title: 'Maintenance toilet plumbing',
        notes: 'Joe, please come urgently, our toilets are a mess !!! Thanks Joe (the other one)',
        startDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 8, 0),
        endDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 18, 0),
        accessRights: [
            {
                validity: 'oneTime',
            },
        ],
    },
    inviter: users.johnDoe,
    doors: [buildings.building1Door1, buildings.building1Door2],
    invitees: [users.joeThePlumber],
};

export const johnDoeInvitation3: OSKTUserInvitation = {
    id: 'invitation-3',
    accessId: `${buildings.building1.id}_${buildings.building1Unit1A.id}`,
    data: {
        buildingId: buildings.building1,
        unitId: buildings.building1Unit1A,
        title: 'Diner',
        notes: 'Bring wine !!!',
        startDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 20, 0),
        endDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 23, 0),
        accessRights: [
            {
                validity: 'oneTime',
            },
        ],
    },
    inviter: users.johnDoe,
    doors: [buildings.building1Door1, buildings.building1Door2],
    invitees: [users.stanDoe],
};

export const billSmithInvitation1: OSKTUserInvitation = {
    id: 'invitation-1',
    accessId: `${buildings.building1.id}`,
    data: {
        buildingId: buildings.building1,
        title: 'Maintenance plumbing',
        notes: 'Joe, please come urgently, everything is a mess !!! Thanks, Bill.',
        startDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 8, 0),
        endDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 18, 0),
        accessRights: [
            {
                validity: 'oneTime',
            },
        ],
    },
    inviter: users.billSmith,
    doors: [buildings.building1Door1, buildings.building1Door2],
    invitees: [users.joeThePlumber],
};

export const stanDoeInvitation1: OSKTUserInvitation = {
    id: 'invitation-1',
    accessId: `${buildings.building3.id}_${buildings.building3Unit1A.id}`,
    data: {
        buildingId: buildings.building3,
        unitId: buildings.building3Unit1A,
        title: 'Familly diner',
        notes: 'Joe, please come urgently, everything is a mess !!! Thanks, Bill.',
        startDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 19, 0),
        endDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 23, 0),
        accessRights: [
            {
                validity: 'oneTime',
            },
        ],
    },
    inviter: users.stanDoe,
    doors: [buildings.building3Door1, buildings.building3Door2],
    invitees: [users.johnDoe, users.janeDoe, users.kevinDoe, users.tiffDoe],
};
