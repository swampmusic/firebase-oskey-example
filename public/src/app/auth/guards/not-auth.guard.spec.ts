/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { TestBed, async, inject } from '@angular/core/testing';

import { OSKNotAuthGuard } from './not-auth.guard';

describe('AuthNotGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OSKNotAuthGuard]
    });
  });

  it('should ...', inject([OSKNotAuthGuard], (guard: OSKNotAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
