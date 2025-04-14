import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { ConstantsMessage } from 'src/assets/config/constants-messages';
import { Roles } from 'src/assets/config/global-enums';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { fromEvent } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';
import { RoleService } from 'src/app/shared/services/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerGorm!: FormGroup
  hide: boolean = true;
  bmcDetail: any = [];
  subscription: any;
  control: any
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toasterService: ToasterService,
    public dialog: MatDialog,
    public session: SessionService,
    public roleService: RoleService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.createRegisterForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      emailId: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  createRegisterForm() {
    this.registerGorm = this.fb.group({
      userName: new FormControl(),
      lastName: new FormControl(),
      mobileNo: new FormControl(),
      standard: new FormControl(),
      emailId: new FormControl(),
      password: new FormControl(),

    })

  }
  get username() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
  submitForm() {
    let obj = {
      emailId: this.loginForm.value.emailId,
      password: this.loginForm.value.password
    };

    this.roleService.loginUser(obj).subscribe(() => {

    }, err => {
      console.log(err);

      if (err.error.text != "user name and password does not match ") {
        this.toasterService.showSuccess('Login Successful', '');
        this.router.navigate(['/pages']);

      } else {
        this.toasterService.showSuccess('INvalid Username and password', '');

      }
    })

  }

  trimInput(controlName: string) {
    this.control = this.loginForm.get(controlName);
    if (this.control.value && typeof this.control.value === 'string') {
      this.control.setValue(this.control.value.trim());
    }
  }

  register(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef, {
      width: "550px",
      height: "400px",
      disableClose: true

    })

  }
  registerUser() {
    let obj = {
      userName: this.registerGorm.value.userName,
      lastName: this.registerGorm.value.lastName,
      standard: this.registerGorm.value.standard,
      mobileNo: this.registerGorm.value.mobileNo,
      password: this.registerGorm.value.password,
      emailId: this.registerGorm.value.emailId,
    }
    this.roleService.createUser(obj).subscribe((data) => {
      console.log('daa', data)
      alert('fdf')
      this.toasterService.showSuccess('Registration Succesfull', '');
      this.registerGorm.reset;
    })

  }

  hideShowPassword() {
    this.hide = !this.hide;
  }
  openSignUp() {
    this.router.navigate(['/sign-up']);
  }
  ngOnDestroy() {
    history.pushState(null, '', location.href);

    this.subscription = fromEvent(window, 'popstate').subscribe(_ => {
      history.pushState(null, '', location.href);
    });
  }

  // ngAfterViewInit() {
  //     document.getElementById('preloader').classList.add('hide');
  // }
}
