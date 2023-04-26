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

import { OSKTBuildingDoor } from './building_door.model';
import { OSKTBuildingUnit } from './building_unit.model';
import { OSKTUser } from './user.model';

import { OSKStreetAddress } from '@oskey/core';
import { OSKTAccessRight } from './access_rights.model';

export type OSKTBuilding = {
    id: string;
    data: {
        name?: string;
        imageFilename?: string;
        isHiddenFromPublicSearch: boolean;
        streetAddress: OSKStreetAddress;
    };
    image?: {
        filename: string;
        sourceFilename: string;
    };
    doors: OSKTBuildingDoor[];
    units: OSKTBuildingUnit[];
    admins: OSKTUser[];
    users: {
        user: OSKTUser;
        roles: { type: 'composite' | 'simple'; roleId: string }[];
        accessRights: OSKTAccessRight[];
    }[];
};
