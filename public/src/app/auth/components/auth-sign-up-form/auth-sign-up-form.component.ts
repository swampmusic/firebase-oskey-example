/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OSKValidators } from 'src/app/core/providers/validators.provider';
import { OSKAuthService } from '../../services/auth.service';

@Component({
  selector: 'osk-auth-sign-up-form',
  templateUrl: './auth-sign-up-form.component.html',
  styleUrls: ['./auth-sign-up-form.component.scss']
})
export class OSKAuthSignUpFormComponent implements OnDestroy {
  public form: FormGroup;
  public signUpHasFailed: boolean = false;
  // private formSubmitAttempt: boolean = false;
  private returnUrl: string = '/';
  private isAuthenticatedSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: OSKAuthService) {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.returnUrl;
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordRepeat: ['', [Validators.required, OSKValidators.mustMatch('password')]]
    });
    this.isAuthenticatedSub = this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) this.router.navigate([this.returnUrl]);
    });
  }

  ngOnDestroy(): void {
    this.isAuthenticatedSub.unsubscribe();
  }

  async onSignUp() {
    this.signUpHasFailed = false;
    // this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const email = this.form.get('email')?.value ?? '';
        const password = this.form.get('password')?.value ?? '';
        await this.authService.createUserWithEmailAndPassword(email, password);
        this.router.navigate(['app/welcome']);
      } catch (err) {
        this.signUpHasFailed = true;
      }
    } else {
      // this.formSubmitAttempt = true;
    }
  }
}
