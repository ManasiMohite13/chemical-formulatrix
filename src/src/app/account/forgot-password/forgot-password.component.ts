import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { ConstantsMessage } from 'src/assets/config/constants-messages';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  showMessage: boolean = false;
  email: any;
  data: any;
  verifyMessage = '';
  constructor(
    private frmBuilder: FormBuilder,
    private authService: AuthService,
    private toaster: ToasterService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.forgotPasswordForm = this.frmBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(ConstantsMessage.EMAIL_PATTERN),
      ]),
    });
  }
  submitForgotPasswordForm() {
    ConstantsMessage.RESET_PASSWORD_MESSAGE;
    this.email = this.forgotPasswordForm.value.email;
    this.authService.forgotPassword(this.email, this.data).subscribe(
      (res: any) => {
        if (res.success) {
          this.showMessage = true;
          this.verifyMessage = ConstantsMessage.RESET_PASSWORD_MESSAGE;
        } else {
          this.toaster.showError(res.errors, '');
        }
      },
      (error) => {}
    );
  }
}
