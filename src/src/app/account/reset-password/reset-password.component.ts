import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { ValidationService } from 'src/app/shared/services/common/validation.service';
import { ConstantsMessage } from 'src/assets/config/constants-messages';
import { codeFor } from 'src/assets/config/global-enums';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  hide: boolean = true;
  visible: boolean = true;
  verifyCode: any;
  email: any;
  data: any;
  passwordInfo: string = ConstantsMessage.VALIDATION_PASSWORD_MESSAGE_INFO;
  constructor(
    private formBuilder: FormBuilder,
    private confirmPasswordValidators: ValidationService,
    private toatserService: ToasterService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    // to get verification code
    this.verifyCode = this.route.snapshot.paramMap.get('verificationCode');
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.resetPasswordForm = this.formBuilder.group(
      {
        newPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ]),
        confirmPassword: new FormControl('', Validators.required),
      },
      {
        validator: this.confirmPasswordValidators.ConfirmedValidator(
          'newPassword',
          'confirmPassword'
        ),
      }
    );
  }
  submitForm() {
    var data = {
      Password: this.resetPasswordForm.value.newPassword,
      verificationCode: this.verifyCode,
      verificationCodeFor: codeFor.ResetPassword,
    };
    this.authService.resetPassword(data).subscribe(
      (res: any) => {
        if (res.success) {
          this.toatserService.showSuccess(
            ConstantsMessage.PASSWORD_UPDATED_SUCCESS,
            ''
          );
          this.router.navigate(['/']);
        } else {
          this.toatserService.showError(res.errors, '');
        }
      },
      (error) => {
        this.toatserService.showWarning(ConstantsMessage.RESET_PASSWORD_ERROR, '');
      }
    );
  }
  hideShowPassword() {
    this.hide = !this.hide;
  }
  hideShowConfirmPassword() {
    this.visible = !this.visible;
  }
}
