/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { TestBed } from '@angular/core/testing';

import { OSKAuthService } from './auth.service';

describe('OSKAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OSKAuthService = TestBed.get(OSKAuthService);
    expect(service).toBeTruthy();
  });
});
