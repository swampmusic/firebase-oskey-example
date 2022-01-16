/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSKAuthRoutingModule } from './auth-routing.module';
import { OSKCoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OSKAuthSignInFormComponent } from './components/auth-sign-in-form/auth-sign-in-form.component';
import { OSKAuthSignUpFormComponent } from './components/auth-sign-up-form/auth-sign-up-form.component';

@NgModule({
  declarations: [
    OSKAuthSignInFormComponent,
    OSKAuthSignUpFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OSKAuthRoutingModule,
    OSKCoreModule
  ]
})
export class OSKAuthModule { }
