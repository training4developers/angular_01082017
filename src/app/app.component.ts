import { Component, ViewEncapsulation, Directive } from '@angular/core';
import {
  FormControl, FormGroup, Validators, FormBuilder, AbstractControl,
  NG_VALIDATORS,
} from '@angular/forms';

const phoneNumberValidator = (control: AbstractControl) => {

  if (control.value == null || String(control.value).length === 0) {
    return null;
  }

  const phoneNumberRegEx = new RegExp('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$');

  if (phoneNumberRegEx.test(control.value)) {
    return null;
  } else {
    return {
      format: true,
    };
  }

};

@Directive({
  selector: '[type=tel][ngModel]',
  providers: [ { provide: NG_VALIDATORS, useValue: phoneNumberValidator, multi: true } ],
})
export class PhoneNumberValidatorDirective { }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {

  public contactForm: FormGroup;

  public phoneNumber: string = '';

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      phoneNumberInput: [ '', { validators: [ Validators.required, phoneNumberValidator ] } ],
      emailAddressInput: [ '' ],
    });
  }

  public showFormData() {
    console.dir(this.contactForm);
    console.dir(this.contactForm.value);
  }
}
