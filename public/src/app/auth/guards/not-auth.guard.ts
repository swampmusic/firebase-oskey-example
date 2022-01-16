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
import { take, map, tap } from 'rxjs/operators';

import { OSKAuthService } from '../services/auth.service';

@Injectable()
export class OSKNotAuthGuard implements CanActivate {
  constructor(private authService: OSKAuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      take(1),
      map((isAuthenticated) => !isAuthenticated),
      tap(isNotAuthenticated => {
        if (!isNotAuthenticated) {
          this.router.navigate(['/app/welcome']);
        }
      })
    );
  }
}
