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
exports.OSKDocumentController = void 0;
const firebase_admin_1 = require("firebase-admin");
class OSKDocumentController {
    async _get(collection, documentId) {
        const doc = await (0, firebase_admin_1.firestore)().collection(collection).doc(documentId).get();
        if (doc.exists)
            return doc.data();
        else
            return undefined;
    }
    async _generateDocId(collection) {
        return (await (0, firebase_admin_1.firestore)().collection(collection).doc()).id;
    }
    async _query(collection, queryFilters) {
        const col = (0, firebase_admin_1.firestore)().collection(collection);
        let query = undefined;
        if (queryFilters && queryFilters.length > 0) {
            query = col.where(queryFilters[0].field, queryFilters[0].op, queryFilters[0].value);
            for (let i = 1; i < queryFilters.length; i++) {
                query = query.where(queryFilters[i].field, queryFilters[i].op, queryFilters[i].value);
            }
        }
        const docs = await (query ? query : col).get();
        return docs.docs.map((doc) => {
            return { data: doc.data(), id: doc.id };
        });
    }
    async _create(collection, documentId, content) {
        await (0, firebase_admin_1.firestore)()
            .collection(collection)
            .doc(documentId)
            .create(content);
    }
    async _set(collection, documentId, content) {
        await (0, firebase_admin_1.firestore)()
            .collection(collection)
            .doc(documentId)
            .set(content);
    }
    async _update(collection, documentId, content) {
        await (0, firebase_admin_1.firestore)().collection(collection).doc(documentId).update(content);
    }
    async _delete(collection, documentId) {
        await (0, firebase_admin_1.firestore)().collection(collection).doc(documentId).delete();
    }
    async _listDocuments(collection) {
        return (await (0, firebase_admin_1.firestore)().collection(collection).listDocuments()).map((doc) => {
            return { id: doc.id };
        });
    }
    async _deleteAll(collection) {
        const docs = await this._listDocuments(collection);
        for (const doc of docs) {
            await this._delete(collection, doc.id);
        }
    }
}
exports.OSKDocumentController = OSKDocumentController;
//# sourceMappingURL=document.controller.js.map