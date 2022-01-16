/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
*/

import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OSKAuthService } from '../../services/auth.service';

@Component({
  selector: 'osk-auth-sign-in-form',
  templateUrl: './auth-sign-in-form.component.html',
  styleUrls: ['./auth-sign-in-form.component.scss']
})
export class OSKAuthSignInFormComponent implements OnDestroy {
  public form: FormGroup;
  public signInHasFailed: boolean = false;
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
      password: ['', Validators.required]
    });
    this.isAuthenticatedSub = this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) this.router.navigate([this.returnUrl]);
    });
  }

  ngOnDestroy(): void {
    this.isAuthenticatedSub.unsubscribe();
  }

  async onSignIn() {
    this.signInHasFailed = false;
    // this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const email = this.form.get('email')?.value ?? '';
        const password = this.form.get('password')?.value ?? '';
        await this.authService.signInWithEmailAndPassword(email, password);
        this.router.navigate([this.returnUrl]);
      } catch (err) {
        this.signInHasFailed = true;
      }
    } else {
      // this.formSubmitAttempt = true;
    }
  }
}
