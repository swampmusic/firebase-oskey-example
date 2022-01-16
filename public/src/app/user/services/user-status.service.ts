/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { Injectable, OnDestroy } from '@angular/core';
import { doc, docSnapshots, Firestore, Timestamp } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { OSKAuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OSKUserStatusService implements OnDestroy {
  private userId: string | null = null;
  private userIdSub: Subscription;

  constructor(
    private authService: OSKAuthService,
    private firestore: Firestore,
  ) {
    this.userIdSub = this.authService.userId$.subscribe((userId) => {
      this.userId = userId;
    })
  }

  ngOnDestroy() {
    this.userIdSub.unsubscribe();
  }

  get isUserProfileComplete$(): Observable<boolean> {
    const docRef = doc(this.firestore, `/users/${this.userId!}/status/${this.userId!}`);
    return docSnapshots(docRef)
      .pipe(
        map(snapshot => {
          const data = snapshot.data();
          if (data) {
            return data['isProfileComplete'] ?? false;
          } else {
            return false;
          }
        })
      );
  }
}
