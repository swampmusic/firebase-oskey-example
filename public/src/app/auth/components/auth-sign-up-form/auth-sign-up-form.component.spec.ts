/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKAuthSignUpFormComponent } from './auth-sign-up-form.component';

describe('OSKAuthSignUpFormComponent', () => {
  let component: OSKAuthSignUpFormComponent;
  let fixture: ComponentFixture<OSKAuthSignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSKAuthSignUpFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKAuthSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
