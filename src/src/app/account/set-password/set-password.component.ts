import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { ValidationService } from 'src/app/shared/validation.service';
import { ConstantsMessage } from 'src/assets/config/constants-messages';
import { ClientSecret, codeFor } from 'src/assets/config/global-enums';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  setPasswordForm!:FormGroup;
  hide: boolean=true;
  visible:boolean=true;
  verifyCode:any;
  passwordInfo:string= ConstantsMessage.VALIDATION_PASSWORD_MESSAGE_INFO;
  constructor(private formBuilder:FormBuilder,private confirmPasswordValidators:ValidationService,private toatserService:ToasterService,private router:Router,private route:ActivatedRoute,private authService:AuthService) {

  // to get verification code 
   this.verifyCode=this.route.snapshot.paramMap.get('code');
   }
  ngOnInit(): void {
    this.verifyCodeValidation();
    this.createForm();
  }
  createForm()
  {
     this.setPasswordForm=this.formBuilder.group({
       newPassword:new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
       confirmPassword:new FormControl('',Validators.required),
     },
     { 
      validator: this.confirmPasswordValidators.ConfirmedValidator('newPassword', 'confirmPassword')
    });
  }
  submitForm()
  {
    var data={
      Password:this.setPasswordForm.value.newPassword,
      ResetToken:this.verifyCode,
      verificationCodeFor:codeFor.SetPassword,
      clientSecret:ClientSecret.ClientSecretForAdmin
    }
    this.authService.resetPassword(data).subscribe((res:any)=>{
      if(res.success)
      {
        this.toatserService.showSuccess(ConstantsMessage.PASSWORD_UPDATED_SUCCESS,"",);
        this.router.navigate(['/']);
      }
      else
      {
        this.toatserService.showError(res.errors,'');
      }
    },error=>{
      this.toatserService.showWarning(ConstantsMessage.RESET_PASSWORD_ERROR,error.error.errors);
    });
    
  }
  hideShowPassword()
  {
    this.hide=!this.hide;
  }
  hideShowConfirmPassword()
  {
    this.visible=!this.visible;
  }

  //verify code api call
  verifyCodeValidation()
  {
    var obj={
      verificationCode:this.verifyCode,
      verificationCodeFor:codeFor.SetPassword
    }
    this.authService.verifyCode(obj).subscribe((res:any)=>{
      if(res.success)
      {

      }
      else
      {
        
        this.toatserService.showError(res.errors,'');
        this.router.navigate(['/']);
      }
      
    }, error=>{
     
    });
    
  }

}
