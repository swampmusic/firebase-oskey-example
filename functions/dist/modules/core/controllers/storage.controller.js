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
exports.OSKStorageController = void 0;
const firebase_admin_1 = require("firebase-admin");
const path = __importStar(require("path"));
class OSKStorageController {
    constructor() {
        this.registeredTriggers = [];
    }
    registerTriggers(triggers) {
        for (const trigger of triggers)
            this.registeredTriggers.push(trigger);
    }
    imageMetadata(object) {
        let contentType = object.contentType;
        if (object.name) {
            switch (path.extname(object.name)) {
                case '.jpeg':
                    contentType = 'image/jpg';
                    break;
                case '.jpg':
                    contentType = 'image/jpg';
                    break;
                case '.png':
                    contentType = 'image/png';
                    break;
                default:
                    contentType = 'application/octet-stream';
                    break;
            }
            return { contentType: contentType };
        }
        else {
            throw Error('This is not a valid file format');
        }
    }
    async processFile(object, context) {
        if (process.env.OSK_FIREBASE_EMULATOR) {
            process.env.FIREBASE_STORAGE_EMULATOR_HOST = 'localhost:18005';
        }
        if (object.name && context.resource) {
            for (const registeredTrigger of this.registeredTriggers) {
                if (object.name.match(registeredTrigger.regExp)) {
                    const metadata = this.imageMetadata(object);
                    await (0, firebase_admin_1.storage)().bucket(object.bucket).file(object.name).setMetadata(metadata);
                    await registeredTrigger.exec(object.bucket, object.name, metadata.contentType);
                }
            }
        }
    }
}
exports.OSKStorageController = OSKStorageController;
OSKStorageController.default = new OSKStorageController();
//# sourceMappingURL=storage.controller.js.map