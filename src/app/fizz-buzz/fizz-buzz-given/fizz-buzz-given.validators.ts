import { AbstractControl } from '@angular/forms';

export class GivenValidators {
  static checkRange(control: AbstractControl) {
    const regexp = /^[1-9][0-9]?$|^100$/i;
    const valid = regexp.test(control.value);
    return valid ? null : { checkRange: true };
  }
}
