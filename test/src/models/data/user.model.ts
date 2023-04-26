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

import { OSKTAuth } from './auth.model';
import { OSKTUserDevice } from './user_device.model';

import { OSKStreetAddress } from '@oskey/core';

export type OSKTUser = {
    id: string;
    auth: OSKTAuth;
    data: {
        publicProfile: {
            firstName: string;
            lastName: string;
            profileImageFilename?: string;
        };
        privateProfile: {
            dateOfBirth: Date;
            streetAddress: OSKStreetAddress;
        };
    };
    devices: OSKTUserDevice[];
    // friends: OSKTUser[];
    // friendRequests: OSKTUser[];
    profileImage?: {
        filename: string;
        sourceFilename: string;
    };
};
