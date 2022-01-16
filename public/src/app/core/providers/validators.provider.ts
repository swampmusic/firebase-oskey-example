/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { AbstractControl, ValidatorFn } from '@angular/forms';

export class OSKValidators {

  constructor() { }

  static mustMatch(matchingControlName: string): ValidatorFn {
    return (control: AbstractControl) => {

      if (control.value === control.parent?.get(matchingControlName)?.value) { return null }
      return { error: 'Passwords don\'t match' };
    };
  }
}