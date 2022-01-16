/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { TestBed, async, inject } from '@angular/core/testing';

import { OSKAuthAndNotAccountCreatedGuard } from './auth-and-not-account-created.guard';

describe('OSKAuthAndNotAccountCreatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OSKAuthAndNotAccountCreatedGuard]
    });
  });

  it('should ...', inject(
    [OSKAuthAndNotAccountCreatedGuard],
    (guard: OSKAuthAndNotAccountCreatedGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
