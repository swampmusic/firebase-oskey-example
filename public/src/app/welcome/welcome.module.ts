/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSKWelcomeComponent } from './components/welcome/welcome.component';
import { OSKCoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    OSKWelcomeComponent
  ],
  imports: [
    CommonModule,
    OSKCoreModule
  ]
})
export class OSKWelcomeModule { }
