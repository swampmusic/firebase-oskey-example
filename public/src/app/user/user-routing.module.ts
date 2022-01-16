/**
 * @author Greg PFISTER
 * @since v0.0.0
 * @copyright (c) Greg PFISTER. All rights reserved.
 * @license EULA - End-User License Agreement (EULA) of Greg PFISTER
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OSKUserProfileCompletionFormComponent } from './components/user-profile-completion-form/user-profile-completion-form.component';
import { OSKUserWaitComponent } from './components/user-wait/user-wait.component';

import { OSKAuthAndCompletedGuard } from '../auth/guards/auth-and-completed.guard';
import { OSKAuthAndNotAccountCreatedGuard } from '../auth/guards/auth-and-not-account-created.guard';
import { OSKAuthAndNotCompletedGuard } from '../auth/guards/auth-and-not-completed.guard';

const routes: Routes = [
  {
    path: 'profileCompletion',
    component: OSKUserProfileCompletionFormComponent,
    canActivate: [OSKAuthAndNotCompletedGuard]
  },
  {
    path: 'wait',
    component: OSKUserWaitComponent,
    canActivate: [OSKAuthAndNotAccountCreatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    OSKAuthAndCompletedGuard,
    OSKAuthAndNotAccountCreatedGuard,
    OSKAuthAndNotCompletedGuard
  ]
})
export class OSKUserRoutingModule { }
