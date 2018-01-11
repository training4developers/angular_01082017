import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {

  public contactForm: FormGroup;

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
