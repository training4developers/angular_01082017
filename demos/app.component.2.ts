import {
  Component, ViewEncapsulation, Directive, Input, forwardRef, OnInit, ViewChild,
} from '@angular/core';
import {
  FormControl, FormGroup, Validators, FormBuilder, AbstractControl,
  NG_VALIDATORS, Validator, NgForm
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


const minLengthValidatorFactory = (minLengthValue: number) => {

  return (control: AbstractControl) => {

    if (control.value == null || String(control.value).length === 0) {
      return null;
    }

    if (String(control.value).length >= minLengthValue) {
      return null;
    } else {
      return {
        minLength: true
      };
    }

  };

};

@Directive({
  selector: '[myMinLength][ngModel]',
  providers: [ { provide: NG_VALIDATORS, useExisting: forwardRef(() => MinLengthValidatorDirective), multi: true } ],
})
export class MinLengthValidatorDirective implements OnInit, Validator {

  private _myMinLength = 0;
  public validatorFn: (c: AbstractControl) => any;

  @Input()
  public set myMinLength(value) {
    console.log('myMinLength value: ' + value);
    this._myMinLength = Number(value);
  }

  constructor() {
    console.log('myMinLength constructor');
  }

  public validate(c: AbstractControl) {
    return this.validatorFn(c);
  }

  public ngOnInit() {
    console.log('ngOnInit myMinLength value: ' + this._myMinLength);
    this.validatorFn = minLengthValidatorFactory(this._myMinLength);
  }


}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {

  public contactForm: FormGroup;

  public phoneNumber: string = '';

  @ViewChild(NgForm)
  public contactTemplateForm;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      phoneNumberInput: [ '', { validators: [ Validators.required, phoneNumberValidator ] } ],
      emailAddressInput: [ '', { validators: [ minLengthValidatorFactory(5) ] } ],
    });
  }

  public showFormData() {
    console.log('reactive form');
    console.dir(this.contactForm);

    console.log('template form');
    console.log(this.contactTemplateForm);
  }
}
