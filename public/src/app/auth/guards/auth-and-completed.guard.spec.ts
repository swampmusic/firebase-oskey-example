/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { TestBed, async, inject } from '@angular/core/testing';

import { OSKAuthAndCompletedGuard } from './auth-and-completed.guard';

describe('OSKAuthAndCompletedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OSKAuthAndCompletedGuard]
    });
  });

  it('should ...', inject(
    [OSKAuthAndCompletedGuard],
    (guard: OSKAuthAndCompletedGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
