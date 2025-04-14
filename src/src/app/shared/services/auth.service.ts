import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';
import { HttpService } from './http.service';
import { SessionService } from './session.service';
import { ManagePermissionService } from './manage-permission.service';
import { ApplicationConstants } from '../model/application.constants';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService, private session: SessionService, private managePermission:ManagePermissionService,) {}

  signIn(email: string, password: string) {
    return this.http.post(ConstantsRoutes.LOGIN_URL, { email, password });
  }

  resetPassword(data: any) {
    let body: any = {};
    (body.Password = data.Password),
      (body.verificationCode = data.verificationCode),
      (body.verificationCodeFor = data.verificationCodeFor);
    return this.http.post(ConstantsRoutes.RESET_PASSWORD, body);
  }

  forgotPassword(objverifyEmail: any, data: any) {
    return this.http.post(
      ConstantsRoutes.FORGOT_PASSWORD + objverifyEmail,
      data
    );
  }

  hasPermissions(roles:any[]){
    const currentRole:any = this.http.getDecryptedValue('roleId');
    const isAvaible = roles.includes(parseInt(currentRole));
    return isAvaible;
    
  }

  verifyCode(verificationObj: any) {
    return this.http.post(ConstantsRoutes.VERIFY_CODE, verificationObj);
  }
  get isLoggedIn(): boolean {
    return this.session.isDataAvailableInStorage('token');
  }

  setupUserCreds(dt: any) {
    this.http.setEncryptedToken(dt.token, dt.refreshToken);
  }
  setLoggedInUserData(dt: any) {
    this.http.setUserDetail(dt.adminUser);
  }

  getRolePermissionList(){
    return new Promise((resolve,reject)=>{
      this.managePermission.getRolePermissionList().subscribe((res:any)=>{
        if(res.success){
          let permissionData = res.result;
          this.session.setParameterDataToLocalStorage(ApplicationConstants.USER_PERMISSIONS,JSON.stringify(permissionData));
        resolve(true)
        }
      }
      )
    })
  }
  getUserDetails() {
    if (this.isLoggedIn) {
      const userValue = this.http.getDecryptedValue('token');
      // parse json object from base64 encoded jwt token
      let jwtToken: any;
      try {
        // jwtToken = JSON.parse(atob(userValue.split('.')[1]))
      } catch (error) {
        return false;
      }
      return jwtToken;
    }
    return false;
  }

  logout() {
    //clear session
    return this.http.removeDataFromLocalStorage();
  }

  getUserDetailsByID(id: number) {
    return this.http.get('api/rpgUsers', id);
  }
  encryptKey(key: any, value: any) {
    return this.http.setEncryptedValue(key, value);
  }
}
