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
import { OSKTOrganization } from '@oskey-test/models';

export const oskey: OSKTOrganization = {
    id: 'fr-oskey',
    data: {
        isoCountryCode: 'fr',
        taxNumber: '123456789',
        tenant: 'oskey',
        name: 'OSkey SAS',
        streetAddress: streetAddresses.oskey,
        compositeRoles: ['v1.admin', 'v1.org.admin', 'v1.org.accessControlDevice.manager', 'v1.org.workorder.register'],
        roles: [],
    },
};

export const acme_sparks: OSKTOrganization = {
    id: 'fr-000000002',
    data: {
        isoCountryCode: 'fr',
        taxNumber: '000000002',
        tenant: 'acme_sparks',
        name: 'ACME Sparks',
        streetAddress: streetAddresses.sparks,
        compositeRoles: ['v1.org.admin', 'v1.org.accessControlDevice.manufacturer'],
        roles: [],
    },
};

export const acme_rents: OSKTOrganization = {
    id: 'fr-000000003',
    data: {
        isoCountryCode: 'fr',
        taxNumber: '000000003',
        tenant: 'acme_rents',
        name: 'ACME Rents',
        streetAddress: streetAddresses.rents,
        compositeRoles: ['v1.org.admin', 'v1.org.building.admin'],
        roles: [],
    },
};

export const acme_locks: OSKTOrganization = {
    id: 'fr-000000004',
    data: {
        isoCountryCode: 'fr',
        taxNumber: '000000004',
        tenant: 'acme_locks',
        name: 'ACME Locks',
        streetAddress: streetAddresses.locks,
        compositeRoles: ['v1.org.admin', 'v1.org.accessControlDevice.installer', 'v1.org.workorder.reporter'],
        roles: [],
    },
};

export const acme_subs: OSKTOrganization = {
    id: 'fr-000000005',
    data: {
        isoCountryCode: 'fr',
        taxNumber: '000000005',
        tenant: 'acme_subs',
        name: 'ACME Subs',
        streetAddress: streetAddresses.subs,
        compositeRoles: ['v1.org.user.admin'],
        roles: ['v1.org.edit'],
    },
};
