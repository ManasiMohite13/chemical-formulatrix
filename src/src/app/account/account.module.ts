import { NgModule } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { SetPasswordComponent } from './set-password/set-password.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SetPasswordComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    AccountRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AccountComponent],
})
export class AccountModule {}
