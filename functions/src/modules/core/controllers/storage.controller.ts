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

import { storage } from 'firebase-admin';
import * as path from 'path';
import { ObjectMetadata } from 'firebase-functions/v1/storage';
import { EventContext } from 'firebase-functions';
import { Metadata } from '@google-cloud/storage/build/src/nodejs-common';

// To help building regexp: https://regex101.com

type OSKExec = (bucket: string, path: string, contentType: string) => Promise<void>;

export class OSKStorageController {
    private registeredTriggers: { regExp: RegExp; exec: OSKExec }[] = [];

    static default = new OSKStorageController();

    registerTriggers(triggers: { regExp: RegExp; exec: OSKExec }[]) {
        for (const trigger of triggers) this.registeredTriggers.push(trigger);
    }

    private imageMetadata(object: ObjectMetadata): Metadata {
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
        } else {
            throw Error('This is not a valid file format');
        }
    }

    async processFile(object: ObjectMetadata, context: EventContext) {
        if (process.env.OSK_FIREBASE_EMULATOR) {
            process.env.FIREBASE_STORAGE_EMULATOR_HOST = 'localhost:18005';
        }

        if (object.name && context.resource) {
            for (const registeredTrigger of this.registeredTriggers) {
                if (object.name.match(registeredTrigger.regExp)) {
                    const metadata = this.imageMetadata(object);
                    await storage().bucket(object.bucket).file(object.name).setMetadata(metadata);
                    await registeredTrigger.exec(object.bucket, object.name, metadata.contentType);
                }
            }
        }
    }
}
