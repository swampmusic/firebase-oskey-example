/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKUserWaitComponent } from './user-wait.component';

describe('OSKUserWaitComponent', () => {
  let component: OSKUserWaitComponent;
  let fixture: ComponentFixture<OSKUserWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OSKUserWaitComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKUserWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
