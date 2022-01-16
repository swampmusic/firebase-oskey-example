/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { OSKUserService } from '../../services/user.service';

@Component({
  selector: 'osk-app-user-wait',
  templateUrl: './user-wait.component.html',
  styleUrls: ['./user-wait.component.scss']
})
export class OSKUserWaitComponent implements OnInit {
  private next: string | null = null;

  constructor(
    private userService: OSKUserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams && queryParams['next']) {
        this.next = queryParams['next'];
      }

      // Listen for the user document, then move on to next
      this.userService.user$.subscribe(user => {
        if (user && this.next) this.router.navigate([this.next]);
      });
    });
  }
}
