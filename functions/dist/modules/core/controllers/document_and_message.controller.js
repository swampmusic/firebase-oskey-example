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
exports.OSKDocumentAndMessageController = void 0;
const document_controller_1 = require("./document.controller");
const message_controller_1 = require("./message.controller");
class OSKDocumentControllerInternal extends document_controller_1.OSKDocumentController {
    constructor() {
        super();
    }
    async get(collection, documentId) {
        return await this._get(collection, documentId);
    }
    async create(collection, documentId, content) {
        await this._create(collection, documentId, content);
    }
    async set(collection, documentId, content) {
        await this._set(collection, documentId, content);
    }
    async update(collection, documentId, content) {
        await this._update(collection, documentId, content);
    }
    async delete(collection, documentId) {
        await this._delete(collection, documentId);
    }
    async listDocuments(collection) {
        return await this._listDocuments(collection);
    }
    async deleteAll(collection) {
        this._deleteAll(collection);
    }
}
class OSKMessageControllerInternal extends message_controller_1.OSKMessageController {
    constructor() {
        super();
    }
    async publish(topic, orderingKey, body) {
        this._publish(topic, orderingKey, body);
    }
}
class OSKDocumentAndMessageController {
    constructor() {
        this.documentController = new OSKDocumentControllerInternal();
        this.messageController = new OSKMessageControllerInternal();
    }
    async _get(collection, documentId) {
        return await this.documentController.get(collection, documentId);
    }
    async _create(collection, documentId, content) {
        return await this.documentController.create(collection, documentId, content);
    }
    async _set(collection, documentId, content) {
        await this.documentController.set(collection, documentId, content);
    }
    async _update(collection, documentId, content) {
        await this.documentController.update(collection, documentId, content);
    }
    async _delete(collection, documentId) {
        await this.documentController.delete(collection, documentId);
    }
    async _listDocuments(collection) {
        return await this.documentController.listDocuments(collection);
    }
    async _deleteAll(collection) {
        await this.documentController.deleteAll(collection);
    }
    async _publish(topic, orderingKey, body) {
        await this.messageController.publish(topic, orderingKey, body);
    }
}
exports.OSKDocumentAndMessageController = OSKDocumentAndMessageController;
//# sourceMappingURL=document_and_message.controller.js.map