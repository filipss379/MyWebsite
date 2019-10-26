import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  firstName: AbstractControl;
  lastName: AbstractControl;
  emailLogIn: AbstractControl;
  emailNewUser: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;

  checkoutLogIn: FormGroup;
  checkoutAccountCreate: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.checkoutLogIn = this.formBuilder.group({
      emailLogIn: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    });

    this.emailLogIn = this.checkoutLogIn.controls['emailLogIn'];
    this.password = this.checkoutLogIn.controls['password'];

    this.checkoutAccountCreate = this.formBuilder.group({
      emailNewUser: [null, [Validators.required, Validators.email]],
      firstName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    });

    this.emailNewUser = this.checkoutAccountCreate.controls['emailNewUser'];
    this.firstName = this.checkoutAccountCreate.controls['firstName'];
    this.lastName = this.checkoutAccountCreate.controls['lastName'];
  }

}
