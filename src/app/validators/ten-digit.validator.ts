import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function tenDigitValidator(message: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const isValid = /^[0-9]{10}$/.test(value);

    return isValid ? null : { custom: message };
  }
}
