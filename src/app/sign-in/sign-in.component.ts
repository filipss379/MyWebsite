import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, AbstractControl, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  checkoutLogIn: FormGroup;
  checkoutAccountCreate: FormGroup;
  firstName: AbstractControl;
  lastName: AbstractControl;
  emailLogIn: AbstractControl;
  emailNewUser: AbstractControl;
  passwordLogIn: AbstractControl;
  passwordAccountCreate: string = '';
  confirmPassword: string = '';
  hidePasswordCreate: boolean = true;
  hideConfirmPasswordCreate: boolean = true;
  hidePasswordLogIn: boolean = true;


  constructor(private formBuilder: FormBuilder) { }

  showPasswordCreate(): void {
    this.hidePasswordCreate = !this.hidePasswordCreate;
  }

  showPasswordLogIn(): void {
    this.hidePasswordLogIn = !this.hidePasswordLogIn;
  }

  showConfirmPasswordCreate(): void {
    this.hideConfirmPasswordCreate = !this.hideConfirmPasswordCreate;
  }

  getAccountCreatePassword(ev: any) {
    this.passwordAccountCreate = ev.target.value;
  }

  getConfirmPassword(ev: any) {
    this.confirmPassword = ev.target.value;
    console.log(this.passwordAccountCreate + "  " + this.confirmPassword);
  }

  ngOnInit() {

    this.checkoutLogIn = this.formBuilder.group({
      emailLogIn: [null, [Validators.required, Validators.email]],
      passwordLogIn: [null, [Validators.required, Validators.minLength(6)]],
    });

    this.emailLogIn = this.checkoutLogIn.controls['emailLogIn'];
    this.passwordLogIn = this.checkoutLogIn.controls['passwordLogIn'];

    this.checkoutAccountCreate = this.formBuilder.group({
      emailNewUser: [null, [Validators.required, Validators.email]],
      firstName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    });

    this.emailNewUser = this.checkoutAccountCreate.controls['emailNewUser'];
    this.firstName = this.checkoutAccountCreate.controls['firstName'];
    this.lastName = this.checkoutAccountCreate.controls['lastName'];
  }

}
