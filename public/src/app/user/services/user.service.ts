/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { Injectable, OnDestroy } from '@angular/core';
import { doc, docSnapshots, Firestore, setDoc, Timestamp } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { OSKUser } from '../models/user.model';

import { OSKAuthService } from 'src/app/auth/services/auth.service';
import { docData } from 'rxfire/firestore';
import { OSKUserPublicProfile } from '../models/user-public-profile.model';
import { OSKUserPrivateProfile } from '../models/user-private-profile.model';

@Injectable({
  providedIn: 'root'
})
export class OSKUserService implements OnDestroy {
  private userId: string | null = null;
  private userIdSub: Subscription;

  // public readonly user$: Observable<OSKUser>;
  // private userAccountSub: Subscription;
  // private userPublicProfileSub: Subscription;
  // private userPrivateProfileSub: Subscription;


  constructor(
    private authService: OSKAuthService,
    private firestore: Firestore,
    private router: Router
  ) {
    this.userIdSub = this.authService.userId$.subscribe((userId) => {
      this.userId = userId;
    })
  }

  // this.userId = 'userId';
  // const userDocRef = doc<OSKUser>(firestore, `test/${this.userId}`);
  // this.user$ = docSnapshots(userDocRef) as Observable<OSKUser>;
  // // // Get the user data from the AuthService
  // this.userSub = this.authService.userId$.subscribe(userId => {
  //   this.userId = userId;
  // });

  // // If authenticated, listen to user data (account, public and private profile)
  // if (userId) {
  //   // User account data (if not already subscribed)
  //   if (!this.userAccountSub) {
  //     this.userAccountSub = this.firestore
  //       .doc<UserAccountDocumentModel>("/users/" + userId)
  //       .snapshotChanges()
  //       .pipe(
  //         map(snapshot => {
  //           return {
  //             id: snapshot.payload.id,
  //             ...snapshot.payload.data()
  //           };
  //         })
  //       )
  //       .subscribe(userDoc => {
  //         this._userAccount = userDoc;
  //       });
  //   }

  //   // User public profile data (if not already subscribed)
  //   if (!this.userPublicProfileSub) {
  //     this.userPublicProfileSub = this.firestore
  //       .doc<UserPublicProfileModel>(
  //         "/users/" + userId + "/public_profile/" + userId
  //       )
  //       .valueChanges()
  //       .subscribe(userDoc => {
  //         this._userPublicProfile = userDoc;
  //       });
  //   }

  //   // User private profile data (if not already subscribed)
  //   if (!this.userPrivateProfileSub) {
  //     this.userPrivateProfileSub = this.firestore
  //       .doc<UserPrivateProfileModel>(
  //         "/users/" + userId + "/private_profile/" + userId
  //       )
  //       .valueChanges()
  //       .subscribe(userDoc => {
  //         this._userPrivateProfile = userDoc;
  //       });
  //   }
  //   // Not Authenticated, cancel ,subscription to user data
  //   else {
  //     // User account data (if already subscribed)
  //     if (this.userAccountSub) {
  //       this.userAccountSub.unsubscribe();
  //     }
  //     this._userAccount = null;

  //     // User public profile data (if already subscribed)
  //     if (this.userPublicProfileSub) {
  //       this.userPublicProfileSub.unsubscribe();
  //     }
  //     this._userPublicProfile = null;

  //     // User private profile (if already subscribed)
  //     if (this.userPrivateProfileSub) {
  //       this.userPrivateProfileSub.unsubscribe();
  //     }
  //     this._userPrivateProfile = null;
  //   }
  // }
  // });

  ngOnDestroy() {
    this.userIdSub.unsubscribe();
  }

  // get isUserProfileComplete$() {
  //   const docRef = doc(this.firestore, `/users/${this.userId}`);
  //   return docSnapshots(docRef)
  //   return this.firestore
  //     .doc<OSKUser>('/users/' + this.userId)
  //     .get()
  //     .pipe(
  //       map(user => {
  //         return user.exists ? user.data().profileCompleted : false;
  //       })
  //     );
  // }

  get user$(): Observable<OSKUser | null> {
    const docRef = doc(this.firestore, `/users/${this.userId!}`);
    return docSnapshots(docRef)
      .pipe(
        map(snapshot => {
          const data = snapshot.data();
          if (data) {
            const user: OSKUser = {
              userId: this.userId!,
              email: data['email']!,
              publicProfile: data['publicProfile']!,
              privateProfile: data['privateProfile']!,
              creationDate: (data['creationDate'] as Timestamp).toDate() ?? Date.now(),
            };
            return user;
          } else {
            return null;
          }
        })
      );
  }

  async updateUser(displayName: string, fullName: string) {
    const publicProfile: OSKUserPublicProfile = {
      displayName: displayName
    };
    const privateProfile: OSKUserPrivateProfile = {
      fullName: fullName
    };
    const docRef = doc(this.firestore, `/users/${this.userId!}`);
    await setDoc(docRef, { publicProfile: publicProfile, privateProfile: privateProfile }, { merge: true });
  }

  // get userPublicProfile$(): Observable<OSKUserPublicProfile> {
  //   return this.firestore
  //     .doc<UserPublicProfileDocumentModel>(
  //       '/users/' + this.userId + '/public_profile/' + this.userId
  //     )
  //     .snapshotChanges()
  //     .pipe(
  //       map(snapshot => {
  //         const userPublicProfile: OSKUserPublicProfile = {
  //           id: snapshot.payload.id,
  //           ...snapshot.payload.data()
  //         };
  //         return snapshot.payload.exists ? userPublicProfile : null;
  //       })
  //     );
  // }

  // get userPrivateProfile$(): Observable<OSKUserPrivateProfile> {
  //   return this.firestore
  //     .doc<UserPrivateProfileDocumentModel>(
  //       '/users/' + this.userId + '/private_profile/' + this.userId
  //     )
  //     .snapshotChanges()
  //     .pipe(
  //       map(snapshot => {
  //         const userPrivateProfile: OSKUserPrivateProfile = {
  //           id: snapshot.payload.id,
  //           ...snapshot.payload.data()
  //         };
  //         return snapshot.payload.exists ? userPrivateProfile : null;
  //       })
  //     );
  // }

  // saveComplete(
  //   userAccountDocument: OSKUser,
  //   userPublicProfileDocument: UserPublicProfileDocumentModel,
  //   userPrivateProfileDocument: UserPrivateProfileDocumentModel
  // ) {
  //   // Document references
  //   const userAccountRef = '/users/' + this.userId;
  //   const userPublicProfileRef =
  //     userAccountRef + '/public_profile/' + this.userId;
  //   const userPrivateProfileRef =
  //     userAccountRef + '/private_profile/' + this.userId;

  //   // Save the user account
  //   userAccountDocument.profileCompleted = true;
  //   this.firestore
  //     .doc(userAccountRef)
  //     .update(userAccountDocument)
  //     .then(() => {
  //       // Save the public profile
  //       this.firestore
  //         .doc(userPublicProfileRef)
  //         .set(userPublicProfileDocument)
  //         .then(() => {
  //           // Save the private profile
  //           this.firestore
  //             .doc(userPrivateProfileRef)
  //             .set(userPrivateProfileDocument)
  //             .then(() => {
  //               this.router.navigate(['/dashboard']);
  //             })
  //             .catch(err => console.error(err));
  //         })
  //         .catch(err => console.error(err));
  //     })
  //     .catch(err => console.error(err));
  // }
}
