/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { expect } from 'chai';

export function checkField<T = string | number | boolean>(documentPath: string, fieldname: string, type: string, value: T | undefined, expectedValue: T) {
  expect(value, `Document ${documentPath} - Missing field '${fieldname}`).to.exist;
  if (value) {
    expect(value, `Document ${documentPath} - Field '${fieldname} has not the proper type`).to.be.a(type);
    expect(value, `Document ${documentPath} - Field '${fieldname} has the wrong value`).to.equal(expectedValue);
  }
}
