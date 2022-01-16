/**
 * @author Greg PFISTER
 * @since v0.0.0
 * @copyright (c) Greg PFISTER. All rights reserved.
 * @license EULA - End-User License Agreement (EULA) of Greg PFISTER
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OSKAuthSignInFormComponent } from './components/auth-sign-in-form/auth-sign-in-form.component';
import { OSKAuthSignUpFormComponent } from './components/auth-sign-up-form/auth-sign-up-form.component';
import { OSKNotAuthGuard } from './guards/not-auth.guard';

const routes: Routes = [
  { path: 'signIn', component: OSKAuthSignInFormComponent, canActivate: [OSKNotAuthGuard] },
  { path: 'signUp', component: OSKAuthSignUpFormComponent, canActivate: [OSKNotAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OSKNotAuthGuard]
})
export class OSKAuthRoutingModule { }
