/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OSKAppRoutingModule } from './app-routing.module';
import { OSKAppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OSKLayoutModule } from './layout/layout.module';
import { OSKWelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [
    OSKAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OSKAppRoutingModule,
    OSKLayoutModule,
    OSKWelcomeModule
  ],
  providers: [],
  bootstrap: [OSKAppComponent]
})
export class OSKAppModule { }
