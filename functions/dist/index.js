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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.core = void 0;
const app_1 = require("firebase-admin/app");
const functions = __importStar(require("firebase-functions"));
const coreTriggers = __importStar(require("./modules/core"));
const userTriggers = __importStar(require("./modules/user"));
/**
 * Initialize app
 */
(0, app_1.initializeApp)();
const functionBuilder = functions.region('europe-west1');
/**
 * Storage
 */
coreTriggers.OSKStorageController.default.registerTriggers([{ regExp: userTriggers.profileImageRegExp, exec: userTriggers.OSKUserController.default.updateProfileImage }]);
// /**
//  * Secrets
//  */
// const sengridApiKey = defineSecret('SENDGRID_API_KEY');
/**
 * Triggers
 */
exports.core = Object.assign({}, coreTriggers.getStorageTriggers(functionBuilder));
exports.user = Object.assign(Object.assign({}, userTriggers.getAuthTriggers(functionBuilder)), userTriggers.getFirestoreTriggers(functionBuilder));
//# sourceMappingURL=index.js.map