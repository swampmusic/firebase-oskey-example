/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { Injectable, OnDestroy } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OSKAuthService {

  constructor(private auth: Auth, private router: Router) { }

  get isAuthenticated$() {
    return authState(this.auth).pipe(map(user => !!user));
  }

  get userId$() {
    return authState(this.auth).pipe(map(user => (user ? user.uid : null)));
  }

  get user$() {
    return authState(this.auth);
  }

  signInWithEmailAndPassword(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then(_ => { })
      .catch(err => {
        console.error(err);
        throw (err);
      });
  }

  createUserWithEmailAndPassword(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then(_ => { })
      .catch(err => {
        console.error(err);
        throw (err);
      });
  }

  signOut() {
    signOut(this.auth)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(err => console.error(err));
  }
}
