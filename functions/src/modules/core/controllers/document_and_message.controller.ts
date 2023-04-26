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

import { DocumentData, WithFieldValue } from 'firebase-admin/firestore';
import { OSKDocument } from '../models/documents/document.model';
import { OSKDocumentProtocol } from '../protocols/document.protocol';
import { OSKMessageProtocol } from '../protocols/message.protocol';
import { OSKDocumentController } from './document.controller';
import { OSKMessageController } from './message.controller';

class OSKDocumentControllerInternal<OSKDocumentBody = OSKDocumentProtocol> extends OSKDocumentController<OSKDocumentBody> {
    constructor() {
        super();
    }

    async get(collection: string, documentId: string): Promise<OSKDocument<OSKDocumentBody> | undefined> {
        return await this._get(collection, documentId);
    }

    async create(collection: string, documentId: string, content: OSKDocumentBody) {
        await this._create(collection, documentId, content);
    }

    async set(collection: string, documentId: string, content: OSKDocument<OSKDocumentBody>) {
        await this._set(collection, documentId, content);
    }

    async update(collection: string, documentId: string, content: WithFieldValue<DocumentData>) {
        await this._update(collection, documentId, content);
    }

    async delete(collection: string, documentId: string) {
        await this._delete(collection, documentId);
    }

    async listDocuments(collection: string) {
        return await this._listDocuments(collection);
    }

    async deleteAll(collection: string) {
        this._deleteAll(collection);
    }
}

class OSKMessageControllerInternal<OSKMessage = OSKMessageProtocol> extends OSKMessageController<OSKMessage> {
    constructor() {
        super();
    }

    async publish(topic: string, orderingKey: string, body: OSKMessage) {
        this._publish(topic, orderingKey, body);
    }
}

export class OSKDocumentAndMessageController<OSKDocumentBody = OSKDocumentProtocol, OSKMessage = OSKMessageProtocol> {
    private documentController = new OSKDocumentControllerInternal<OSKDocumentBody>();
    private messageController = new OSKMessageControllerInternal<OSKMessage>();

    protected async _get(collection: string, documentId: string): Promise<OSKDocument<OSKDocumentBody> | undefined> {
        return await this.documentController.get(collection, documentId);
    }

    protected async _create(collection: string, documentId: string, content: OSKDocumentBody) {
        return await this.documentController.create(collection, documentId, content);
    }

    protected async _set(collection: string, documentId: string, content: OSKDocument<OSKDocumentBody>) {
        await this.documentController.set(collection, documentId, content);
    }

    protected async _update(collection: string, documentId: string, content: WithFieldValue<DocumentData>) {
        await this.documentController.update(collection, documentId, content);
    }

    protected async _delete(collection: string, documentId: string) {
        await this.documentController.delete(collection, documentId);
    }

    protected async _listDocuments(collection: string) {
        return await this.documentController.listDocuments(collection);
    }

    protected async _deleteAll(collection: string) {
        await this.documentController.deleteAll(collection);
    }

    protected async _publish(topic: string, orderingKey: string, body: OSKMessage) {
        await this.messageController.publish(topic, orderingKey, body);
    }
}
