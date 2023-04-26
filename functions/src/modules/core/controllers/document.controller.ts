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

import { firestore } from 'firebase-admin';
import { DocumentData, WithFieldValue, FieldPath, WhereFilterOp, Query } from 'firebase-admin/firestore';
import { OSKDocument } from '../models/documents/document.model';
import { OSKDocumentId } from '../models/documents/document_id.model';
import { OSKDocumentList } from '../models/documents/document_list.model';
import { OSKDocumentProtocol } from '../protocols/document.protocol';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OSKQueryFilter = { field: FieldPath | string; op: WhereFilterOp; value: any };

export class OSKDocumentController<OSKDocumentBody = OSKDocumentProtocol> {
    protected async _get(collection: string, documentId: string): Promise<OSKDocument<OSKDocumentBody> | undefined> {
        const doc = await firestore().collection(collection).doc(documentId).get();

        if (doc.exists) return doc.data() as OSKDocument<OSKDocumentBody>;
        else return undefined;
    }

    protected async _generateDocId(collection: string) {
        return (await firestore().collection(collection).doc()).id;
    }

    protected async _query(collection: string, queryFilters?: OSKQueryFilter[]): Promise<OSKDocumentList<OSKDocument<OSKDocumentBody>>> {
        const col = firestore().collection(collection);
        let query: Query | undefined = undefined;
        if (queryFilters && queryFilters.length > 0) {
            query = col.where(queryFilters[0].field, queryFilters[0].op, queryFilters[0].value);
            for (let i = 1; i < queryFilters.length; i++) {
                query = query.where(queryFilters[i].field, queryFilters[i].op, queryFilters[i].value);
            }
        }
        const docs = await (query ? query : col).get();
        return docs.docs.map((doc) => {
            return { data: doc.data() as OSKDocument<OSKDocumentBody>, id: doc.id };
        });
    }

    protected async _create(collection: string, documentId: string, content: OSKDocumentBody) {
        await firestore()
            .collection(collection)
            .doc(documentId)
            .create(content as WithFieldValue<DocumentData>);
    }

    protected async _set(collection: string, documentId: string, content: OSKDocument<OSKDocumentBody>) {
        await firestore()
            .collection(collection)
            .doc(documentId)
            .set(content as WithFieldValue<DocumentData>);
    }

    protected async _update(collection: string, documentId: string, content: OSKDocument<OSKDocumentBody> | WithFieldValue<DocumentData>) {
        await firestore().collection(collection).doc(documentId).update(content);
    }

    protected async _delete(collection: string, documentId: string) {
        await firestore().collection(collection).doc(documentId).delete();
    }

    protected async _listDocuments(collection: string): Promise<OSKDocumentId[]> {
        return (await firestore().collection(collection).listDocuments()).map((doc) => {
            return { id: doc.id };
        });
    }

    protected async _deleteAll(collection: string) {
        const docs = await this._listDocuments(collection);
        for (const doc of docs) {
            await this._delete(collection, doc.id);
        }
    }
}
