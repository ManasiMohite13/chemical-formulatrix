import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ValidationService } from 'src/app/shared/validation.service';
import { ConstantsMessage } from 'src/assets/config/constants-messages';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm!: FormGroup;
  userId: any
  isAdmin: any
  userList: any
  userType: any
  userProfile: boolean = true;
  userChangePassword: boolean = false
  changePasswordForm!: FormGroup;
  hide: boolean = true;
  visible: boolean = true;
  oldPasswordVisible: boolean = true;

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private sessionService: SessionService, private httpService: HttpService,
    private fb: FormBuilder, private userService: UserService, private toasterService: ToasterService, private confirmPasswordValidators: ValidationService, private router: Router) {
    // this.userId=this.sessionService.getLoggedInUserData('userId');
    this.userId = Number(this.httpService.getDecryptedValue('userId'));
    this.userType = Number(this.httpService.getDecryptedValue('userType'));
    this.createForm();
    this.getUserById();
    this.changePasswordsForm()
  }
  toggleOldPasswordVisibility() {
    this.oldPasswordVisible = !this.oldPasswordVisible;
  }

  onTabChange(tabNo: any) {
    if (tabNo == 0) {
      this.userProfile = true;
      this.userChangePassword = false;
    } else if (tabNo == 1) {
      this.userChangePassword = true;
      this.userProfile = false;
    }

  }
  createForm() {
    this.profileForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern(ConstantsMessage.ONLY_LETTERS_WITH_SPACE)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(ConstantsMessage.ONLY_LETTERS_WITH_SPACE)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern(ConstantsMessage.CONTACT_NUMBER_PATTERN)]),
    })
  }
  changePasswordsForm() {
    this.changePasswordForm = this.fb.group({
      id: new FormControl(),
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      retypePassword: new FormControl('', Validators.required)
    },
      {
        validator: this.confirmPasswordValidators.ConfirmedValidator(
          'newPassword',
          'retypePassword',
        ),
      }
    );
  }
  cancel() {
    if (this.userType == 1 || this.userType == 2) {
      if (this.userType == 1) {
        this.router.navigate(['/pages/admin/hospital']);
      } else if (this.userType == 2) {
        this.router.navigate(['/pages/admin/support']);

      }
    }
    else if (this.userType == 3 || this.userType == 5) {
      this.router.navigate(['/pages/admin/appointment']);
    } else {
      this.router.navigate(['/pages/admin/patient/patient-profile']);
    }
  }


  changePasswordSubmit() {
    let obj = {
      oldPassword: this.changePasswordForm.value.oldPassword,
      newPassword: this.changePasswordForm.value.newPassword,
      retypePassword: this.changePasswordForm.value.retypePassword,
    }
    this.userService.changePassword(obj).subscribe((res: any) => {
      if (res.success) {
        this.toasterService.showSuccess(ConstantsMessage.USER_PASS_UPDATE, '');
      } else {
        this.toasterService.showError(res.errors, '');
      }
    })
  }

  getUserById() {
    let obj = {
      id: this.userId
    }
    this.userService.getUserDetailsById(obj).subscribe((res: any) => {
      if (res.success) {
        this.userList = res.result;
        this.profileForm.patchValue(this.userList);
      }
      else {
        this.toasterService.showError(res.errors, '');
      }
    })
  }
  support(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef, {
      width: "650px",
      disableClose: true

    })
  }

  submitProfileForm() {
    let obj = {
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      mobileNumber: this.profileForm.value.mobileNumber,
    }
    this.userService.changepProfileDetail(obj).subscribe((res: any) => {
      if (res.success) {
        this.toasterService.showSuccess(ConstantsMessage.USER_DETAILS, '');
      }
      else {
        this.toasterService.showError(res.errors, '');
      }
    })
  }
  changePassword(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef, {
      width: "550px",
      disableClose: true
    });

  }
  cancelPasswordForm() {
    if (this.userType == 1 || this.userType == 2) {
      if (this.userType == 1) {
        this.router.navigate(['/pages/admin/hospital']);
      } else if (this.userType == 2) {
        this.router.navigate(['/pages/admin/support']);

      }
    }
    else if (this.userType == 3 || this.userType == 5) {
      this.router.navigate(['/pages/admin/appointment']);
    } else {
      this.router.navigate(['/pages/admin/patient/patient-profile']);
    }
  }


}
