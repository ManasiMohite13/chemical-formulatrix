import { FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

export class DyanamicFormValidator extends Validators {

  static isMinLength(minRange: number, message: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: string } | null => {
      if (c.value && c.value.length < minRange) {
        return {
          'minLength': message
        }
      }
      return null;
    }
  }
  static isMaxLength(maxRange: number, message: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: string } | null => {
      if (c.value && c.value.length > maxRange) {
        return {
          'maxLength': message
        }
      }
      return null;
    }
  }
  static isRequired(isRequired: number, message: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: string } | null => {
      if (isRequired && (c.value == null || (c.value && c.value.toString().trim() == ''))) {
        return {
          'required': message
        }
      }
      return null;
    }
  }

  static isMin(minRange: number, message: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: string } | null => {
      if (c.value && !isNaN(c.value) && c.value < minRange) {
        return {
          'min': message
        }
      }
      return null;
    }
  }
  static isMax(maxRange: number, message: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: string } | null => {
      if (c.value && !isNaN(c.value) && c.value > maxRange) {
        return {
          'max': message
        }
      }
      return null;
    }
  }

  static isEmail(email: boolean, message: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: string } | null => {
      let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      let result = regex.test(c.value);
      if (result) {
        return null;
      }
      return {
        'email': message
      }

    }
  }

  static isPattern(pattern: string, message: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: string } | null => {
      if (pattern && pattern.toString().trim()) {
        let regex = new RegExp(pattern);

        let result = regex.test(c.value);
        if (result) {
          return null;
        }
        return {
          'pattern': message
        }
      }
return null;

    }
  }


}