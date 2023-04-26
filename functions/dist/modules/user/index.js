"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthTriggers = exports.getFirestoreTriggers = exports.profileImageRegExp = exports.OSKUserStatusController = exports.OSKUserController = void 0;
const user_service_1 = require("./services/user.service");
const userPass = '/users/{userId}';
/**
 * Controllers
 */
var user_controller_1 = require("./controllers/user.controller");
Object.defineProperty(exports, "OSKUserController", { enumerable: true, get: function () { return user_controller_1.OSKUserController; } });
var user_status_controller_1 = require("./controllers/user_status.controller");
Object.defineProperty(exports, "OSKUserStatusController", { enumerable: true, get: function () { return user_status_controller_1.OSKUserStatusController; } });
/**
 * RegExp for storage file
 */
exports.profileImageRegExp = new RegExp('^users/[a-zA-Z0-9-]*/public/profileImages/[a-zA-Z0-9-]*.(png|jpg|jpeg)$'); // eslint-disable-line
/**
 * Triggers
 */
function getFirestoreTriggers(functionBuilder) {
    const db = functionBuilder.firestore;
    return {
        onUserCreated: db.document(userPass).onCreate(user_service_1.OSKUserService.onDocumentCreated),
        onUserUpdated: db.document(userPass).onUpdate(user_service_1.OSKUserService.onDocumentUpdated),
        onUserDeleted: db.document(userPass).onDelete(user_service_1.OSKUserService.onDocumentDeleted),
    };
}
exports.getFirestoreTriggers = getFirestoreTriggers;
function getAuthTriggers(functionBuilder) {
    const auth = functionBuilder.auth;
    return {
        onUserAccountCreated: auth.user().onCreate(user_service_1.OSKUserService.onAccountCreated),
        onUserAccountDeleted: auth.user().onDelete(user_service_1.OSKUserService.onAccountDeleted),
    };
}
exports.getAuthTriggers = getAuthTriggers;
// export function getCallableFunctionTriggers(functionBuilder: FunctionBuilder) {
//     return {
//     };
// }
//# sourceMappingURL=index.js.map