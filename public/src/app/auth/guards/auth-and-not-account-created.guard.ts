/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap, mergeMap } from 'rxjs/operators';

import { OSKAuthService } from '../services/auth.service';
import { OSKUserService } from 'src/app/user/services/user.service';
import { OSKUserStatusService } from 'src/app/user/services/user-status.service';

@Injectable({
  providedIn: 'root'
})
export class OSKAuthAndNotAccountCreatedGuard implements CanActivate {
  constructor(
    private authService: OSKAuthService,
    private userService: OSKUserService,
    private userStatusService: OSKUserStatusService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // Step 1) Check authentication
    return this.authService.isAuthenticated$.pipe(
      take(1),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['/auth/signIn']);
        }
      }),
      mergeMap(_ => {
        //Step 2) Check if the user is not yet created
        return this.userStatusService.isUserProfileComplete$.pipe(
          take(1),
          tap(isUserProfileCompleted => {
            if (isUserProfileCompleted) {
              this.router.navigate(['/']);
            }
          })
        );
      })
    );
  }
}
