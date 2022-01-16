/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKMainComponent } from './main.component';

describe('MainComponent', () => {
  let component: OSKMainComponent;
  let fixture: ComponentFixture<OSKMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OSKMainComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
