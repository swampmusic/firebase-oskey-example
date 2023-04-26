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

import { expect } from 'chai';
import * as firebaseFirestore from 'firebase/firestore';
import { OSKStreetAddress } from '@oskey/core';

export function checkField<T = string | number | boolean>(documentPath: string, fieldname: string, type: string, value: T | undefined, expectedValue: T) {
    expect(value, `Document ${documentPath} - Missing field ${fieldname}`).to.exist;
    if (value) {
        expect(value, `Document ${documentPath} - Field '${fieldname} has not the proper type`).to.be.a(type);
        expect(value, `Document ${documentPath} - Field '${fieldname} has the wrong value`).to.equal(expectedValue);
    }
}

export function checkFieldTimestamp(documentPath: string, fieldname: string, value: firebaseFirestore.Timestamp | undefined, expectedValue: firebaseFirestore.Timestamp) {
    expect(value, `Document ${documentPath} - Missing field ${fieldname}`).to.exist;
    if (value) {
        expect(value, `Document ${documentPath} - Field '${fieldname} has not the proper type`).to.be.instanceOf(firebaseFirestore.Timestamp);
        expect(value.toString, `Document ${documentPath} - Field '${fieldname} has the wrong value`).to.equal(expectedValue.toString);
    }
}

export function checkFieldStreetAddress(documentPath: string, fieldname: string, value: OSKStreetAddress | undefined, expectedValue: OSKStreetAddress) {
    expect(value, `Document ${documentPath} - Missing field ${fieldname}`).to.exist;
    if (value) {
        expect(value, `Document ${documentPath} - Field '${fieldname} has not the proper type`).to.be.a('object');
        checkField(documentPath, `${fieldname}.houseNumber`, 'string', value.houseNumber, expectedValue.houseNumber);
        checkField(documentPath, `${fieldname}.streetName`, 'string', value.streetName, expectedValue.streetName);
        checkField(documentPath, `${fieldname}.postalCode`, 'string', value.postalCode, expectedValue.postalCode);
        checkField(documentPath, `${fieldname}.city`, 'string', value.city, expectedValue.city);
        checkField(documentPath, `${fieldname}.country`, 'string', value.country, expectedValue.country);
        checkField(documentPath, `${fieldname}.isoCountryCode`, 'string', value.isoCountryCode, expectedValue.isoCountryCode);

        if (expectedValue.coordinate) {
            expect(value.coordinate, `Document ${documentPath} - Missing field ${fieldname}.coordinate`).to.exist;
            if (value.coordinate) {
                checkField(documentPath, `${fieldname}.coordinate.latitude`, 'number', value.coordinate.latitude, expectedValue.coordinate.latitude);
                checkField(documentPath, `${fieldname}.coordinate.longitude`, 'number', value.coordinate.longitude, expectedValue.coordinate.longitude);
            }
        }
    }
}

export function checkFieldArray(documentPath: string, fieldname: string, array: unknown[], expectedArray: unknown[]) {
    for (const value of array) {
        expect(expectedArray, `Document ${documentPath} - Field '${fieldname}' is having an entry it shouldn't`).to.be.an('array').and.deep.include(value);
    }
    for (const value of expectedArray) {
        expect(array, `Document ${documentPath} - Field '${fieldname}' is missing an entry`).to.be.an('array').and.deep.include(value);
    }
}

export function checkFieldBuffer(documentPath: string, fieldname: string, buffer: Buffer, expectedBuffer: Buffer) {
    expect(buffer.toString('base64'), `Document ${documentPath} - Field '${fieldname}' had the wrong value`).to.equal(expectedBuffer.toString('base64'));
}
