/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { TestBed } from '@angular/core/testing';

import { OSKUserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OSKUserService = TestBed.get(OSKUserService);
    expect(service).toBeTruthy();
  });
});
