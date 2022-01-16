/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { TestBed, async, inject } from '@angular/core/testing';

import { OSKAuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OSKAuthGuard]
    });
  });

  it('should ...', inject([OSKAuthGuard], (guard: OSKAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
