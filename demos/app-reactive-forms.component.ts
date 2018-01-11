import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public contactForm: FormGroup;

  // = new FormGroup({
  //   phoneNumberInput: new FormControl('', [ Validators.required ]),
  //   emailAddressInput: new FormControl(''),
  // });

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      phoneNumberInput: [ '', Validators.required ],
      emailAddressInput: [ '' ],
    });
  }

  public showFormData() {
    console.dir(this.contactForm);
    console.dir(this.contactForm.value);
  }
}
