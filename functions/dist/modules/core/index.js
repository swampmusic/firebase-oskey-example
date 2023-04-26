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
exports.getStorageTriggers = exports.OSKStorageController = exports.OSKMessageController = exports.OSKDocumentAndMessageController = exports.OSKDocumentController = void 0;
const storage_service_1 = require("./services/storage.service");
/**
 * Controllers
 */
var document_controller_1 = require("./controllers/document.controller");
Object.defineProperty(exports, "OSKDocumentController", { enumerable: true, get: function () { return document_controller_1.OSKDocumentController; } });
var document_and_message_controller_1 = require("./controllers/document_and_message.controller");
Object.defineProperty(exports, "OSKDocumentAndMessageController", { enumerable: true, get: function () { return document_and_message_controller_1.OSKDocumentAndMessageController; } });
var message_controller_1 = require("./controllers/message.controller");
Object.defineProperty(exports, "OSKMessageController", { enumerable: true, get: function () { return message_controller_1.OSKMessageController; } });
var storage_controller_1 = require("./controllers/storage.controller");
Object.defineProperty(exports, "OSKStorageController", { enumerable: true, get: function () { return storage_controller_1.OSKStorageController; } });
/**
 * Trigger
 */
function getStorageTriggers(functionBuilder) {
    const storage = functionBuilder.region('europe-west1').storage;
    return {
        onStorageFileFinalized: storage.bucket().object().onFinalize(storage_service_1.OSKStorageService.onFinalize),
    };
}
exports.getStorageTriggers = getStorageTriggers;
//# sourceMappingURL=index.js.map