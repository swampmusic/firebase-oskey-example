/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSKFooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: OSKFooterComponent;
  let fixture: ComponentFixture<OSKFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OSKFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSKFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
