/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKAuthSignInFormComponent } from './auth-sign-in-form.component';

describe('OSKAuthSignInFormComponent', () => {
  let component: OSKAuthSignInFormComponent;
  let fixture: ComponentFixture<OSKAuthSignInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSKAuthSignInFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKAuthSignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
