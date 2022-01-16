/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { TestBed } from '@angular/core/testing';

import { OSKUserStatusService } from './user-status.service';

describe('UserStatusService', () => {
  let service: OSKUserStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OSKUserStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
