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

// import { OSKTBuilding } from './building.model';
// import { OSKTBuildingDoor } from './building_door.model';
// import { OSKTBuildingUnit } from './building_unit.model';
// import { OSKTUser } from './user.model';

// export type OSKTUserAccessInvitation = {
//     id: string;
//     accessId: string;
//     data: {
//         buildingId: OSKTBuilding;
//         unitId?: OSKTBuildingUnit;
//         title: string;
//         notes?: string;
//         startDate: Date;
//         endDate: Date;
//         accessRights: {
//             validity: 'oneTime' | 'permanent' | 'recurrent';
//             recurrence?: {
//                 periodicity: 'daily' | 'weekly' | 'monthly';
//                 onWeekDays: {
//                     monday: boolean;
//                     tuesday: boolean;
//                     wednesday: boolean;
//                     thursday: boolean;
//                     friday: boolean;
//                     saturday: boolean;
//                     sunday: boolean;
//                 };
//                 onMonthDay: number;
//             };
//         }[];
//     };
//     invitees: OSKTUser[];
//     doors: OSKTBuildingDoor[];
// };

// import { OSKAccessRight } from '@oskey/core/access';
import { OSKTAccessRight } from './access_rights.model';
import { OSKTBuilding } from './building.model';
import { OSKTBuildingDoor } from './building_door.model';
import { OSKTBuildingUnit } from './building_unit.model';
import { OSKTUser } from './user.model';

export type OSKTUserInvitation = {
    id: string;
    accessId: string;
    data: {
        buildingId: OSKTBuilding;
        unitId?: OSKTBuildingUnit;
        title: string;
        notes?: string;
        startDate: Date;
        endDate: Date;
        accessRights: OSKTAccessRight[];
    };
    inviter: OSKTUser;
    invitees: OSKTUser[];
    doors: OSKTBuildingDoor[];
};
