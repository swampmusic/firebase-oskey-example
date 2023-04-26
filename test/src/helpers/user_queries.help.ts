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

import { GPFirebaseEmulatorAdminTestApp } from 'gp-firebase-emulator-unit-test';

export async function getUidFromEmail(firebaseAdminTestApp: GPFirebaseEmulatorAdminTestApp, email: string): Promise<string> {
    // const db = firebaseAdminTestApp.firestore;
    // const docs = (await (await db.collection('/emulatorUsers').where('email', '==', email).get()).docs);

    // if (docs.length === 1) return docs[0].data().uid as string;
    // else if (docs.length === 0) throw Error(`No user could be found for email '${email}''`);
    // else throw Error(`${docs.length} users found for email '${email}''`);
    const auth = firebaseAdminTestApp.auth;
    const userRecord = await auth.getUserByEmail(email);

    return userRecord.uid;
}
