/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
*/

import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { OSKUserService } from '../../services/user.service';
import { OSKAuthService } from 'src/app/auth/services/auth.service';
import { OSKUserStatusService } from '../../services/user-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'osk-user-profile-completion-form',
  templateUrl: './user-profile-completion-form.component.html',
  styleUrls: ['./user-profile-completion-form.component.scss']
})
export class OSKUserProfileCompletionFormComponent implements OnDestroy {
  public form: FormGroup;
  public displayName = '';
  public fullName = '';
  public isUpdating = false;
  public updateHasFailed: boolean = false;
  private userSub: Subscription;
  private isUserProfileCompletedSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: OSKAuthService,
    private userService: OSKUserService,
    private userStatusService: OSKUserStatusService,
    private router: Router
  ) {

    this.form = this.formBuilder.group({
      displayName: [this.displayName, Validators.required],
      fullName: [this.fullName, Validators.required]
    });
    this.userSub = this.userService.user$.subscribe((user) => {
      if (user) {
        this.displayName = user.publicProfile.displayName;
        this.fullName = user.privateProfile.fullName;
      }
    });
    this.isUserProfileCompletedSub = this.userStatusService.isUserProfileComplete$.subscribe((isUserProfileCompleted) => {
      if (isUserProfileCompleted) this.router.navigate(['/']);
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.isUserProfileCompletedSub.unsubscribe();
  }

  async onUpdate() {
    this.updateHasFailed = false;
    if (this.form.valid) {
      try {
        const displayName = this.form.get('displayName')?.value ?? '';
        const fullName = this.form.get('fullName')?.value ?? '';
        this.isUpdating = true;
        await this.userService.updateUser(displayName, fullName);
      } catch (err) {
        this.isUpdating = false;
        this.updateHasFailed = true;
      }
    }
  }


  async onSignOut() {
    await this.authService.signOut();
  }
}
