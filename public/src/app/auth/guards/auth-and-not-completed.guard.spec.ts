/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { TestBed, async, inject } from '@angular/core/testing';

import { OSKAuthAndNotCompletedGuard } from './auth-and-not-completed.guard';

describe('OSKAuthAndNotCompletedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OSKAuthAndNotCompletedGuard]
    });
  });

  it('should ...', inject(
    [OSKAuthAndNotCompletedGuard],
    (guard: OSKAuthAndNotCompletedGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
