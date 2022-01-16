/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKUserProfileCompletionFormComponent } from './user-profile-completion-form.component';

describe('OSKUserFirstConnectionWizzardComponent', () => {
  let component: OSKUserProfileCompletionFormComponent;
  let fixture: ComponentFixture<OSKUserProfileCompletionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OSKUserProfileCompletionFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKUserProfileCompletionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
