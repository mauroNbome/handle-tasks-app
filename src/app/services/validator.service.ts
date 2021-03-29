import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s: string]: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  emailMatch(email1: string, email2: string) {
    return (formGroup: FormGroup) => {
      const email1Control = formGroup.controls[email1];
      const email2Control = formGroup.controls[email2];

      if (email1Control.value === email2Control.value) {
        email2Control.setErrors(null);
      } else {
        email2Control.setErrors({ dontMatch: true });
      }
    };
  }
}
