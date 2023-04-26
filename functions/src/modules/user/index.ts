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

import { FunctionBuilder } from 'firebase-functions/v1';

import { OSKUserService } from './services/user.service';

const userPass = '/users/{userId}';

/**
 * Controllers
 */
export { OSKUserController } from './controllers/user.controller';
export { OSKUserStatusController } from './controllers/user_status.controller';

/**
 * Models
 */
export { OSKUser, OSKUserDocument } from './models/documents/user_document.model';
export { OSKUserStatus, OSKUserStatusDocument } from './models/documents/user_status_document.model';

/**
 * RegExp for storage file
 */

export const profileImageRegExp = new RegExp('^users/[a-zA-Z0-9-]*/public/profileImages/[a-zA-Z0-9-]*.(png|jpg|jpeg)$'); // eslint-disable-line

/**
 * Triggers
 */

export function getFirestoreTriggers(functionBuilder: FunctionBuilder) {
    const db = functionBuilder.firestore;
    return {
        onUserCreated: db.document(userPass).onCreate(OSKUserService.onDocumentCreated),
        onUserUpdated: db.document(userPass).onUpdate(OSKUserService.onDocumentUpdated),
        onUserDeleted: db.document(userPass).onDelete(OSKUserService.onDocumentDeleted),
    };
}

export function getAuthTriggers(functionBuilder: FunctionBuilder) {
    const auth = functionBuilder.auth;
    return {
        onUserAccountCreated: auth.user().onCreate(OSKUserService.onAccountCreated),
        onUserAccountDeleted: auth.user().onDelete(OSKUserService.onAccountDeleted),
    };
}

// export function getCallableFunctionTriggers(functionBuilder: FunctionBuilder) {
//     return {
//     };
// }
