/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OSKAuthService } from 'src/app/auth/services/auth.service';
import { OSKUserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'osk-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class OSKHeaderComponent implements OnDestroy {
  public isAuthenticated = false;
  public userDisplayName = '';
  private isAuthenticatedSub: Subscription;
  private userSub?: Subscription;

  constructor(
    private authService: OSKAuthService,
    private userService: OSKUserService
  ) {
    this.isAuthenticatedSub = this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      // Activate based on authentication status
      if (this.isAuthenticated && !isAuthenticated && this.userSub) {
        this.userSub.unsubscribe();
        this.userSub = undefined;
      } else if (!this.isAuthenticated && isAuthenticated) {
        this.userSub = this.userService.user$.subscribe((user) => {
          if (user) {
            this.userDisplayName = user.publicProfile.displayName.length > 0 ? user.publicProfile.displayName : 'No name';
          }
          else this.userDisplayName = 'Loading...';
        });
      }
      this.isAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy(): void {
    this.isAuthenticatedSub.unsubscribe();
    if (this.userSub) this.userSub.unsubscribe();
  }

  async onSignOut() {
    await this.authService.signOut();
  }
}
