/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OSKCoreModule } from '../core/core.module';

import { OSKHeaderComponent } from './components/header/header.component';
import { OSKFooterComponent } from './components/footer/footer.component';
import { OSKMainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OSKHeaderComponent, OSKFooterComponent, OSKMainComponent],
  imports: [CommonModule, RouterModule, OSKCoreModule],
  exports: [OSKHeaderComponent, OSKFooterComponent, OSKMainComponent]
})
export class OSKLayoutModule { }
