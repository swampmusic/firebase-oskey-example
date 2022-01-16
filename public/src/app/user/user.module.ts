/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSKCoreModule } from '../core/core.module';
import { OSKUserRoutingModule } from './user-routing.module';
import { OSKUserWaitComponent } from './components/user-wait/user-wait.component';
import { OSKUserProfileCompletionFormComponent } from './components/user-profile-completion-form/user-profile-completion-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OSKUserWaitComponent,
    OSKUserProfileCompletionFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OSKCoreModule,
    OSKUserRoutingModule
  ]
})
export class OSKUserModule { }
