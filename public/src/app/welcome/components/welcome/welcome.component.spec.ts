/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKWelcomeComponent } from './welcome.component';

describe('OSKWelcomeComponent', () => {
  let component: OSKWelcomeComponent;
  let fixture: ComponentFixture<OSKWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSKWelcomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
