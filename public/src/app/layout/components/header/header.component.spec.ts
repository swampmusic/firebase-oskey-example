/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: OSKHeaderComponent;
  let fixture: ComponentFixture<OSKHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OSKHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
