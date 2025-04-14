import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserList(tenantId: any) {
    return this.http.get(ConstantsRoutes.USER_LIST + tenantId);
  }



  getUserListForAdmin() {
    return this.http.get(ConstantsRoutes.USER_LIST_ADMIN);
  }

  getUserById(obj: any) {
    return this.http.post(ConstantsRoutes.GET_USER_BY_ID, obj);
  }

  getReferanceDetail(obj: any) {
    return this.http.post(ConstantsRoutes.GET_REFERANCE_DETAIL, obj);
  }

  createUser(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_USER, obj);
  }

  updateUserPassword(obj: any) {
    return this.http.put(ConstantsRoutes.UPDATE_USER_PASSWORD, obj);
  }
  updateUser(obj: any) {
    return this.http.put(ConstantsRoutes.UPDATE_USER, obj);
  }

  deleteUser(obj: any) {
    return this.http.delete(ConstantsRoutes.CANCEL_USER, obj);
  }
  changePassword(obj: any) {
    return this.http.put(ConstantsRoutes.CHANGE_PASSWORD, obj);
  }
  changepProfileDetail(obj: any) {
    return this.http.put(ConstantsRoutes.CHANGE_PROFILE_DETAIL, obj);
  }
  updateUserSupport(obj:any){
    return this.http.put(ConstantsRoutes.UPDATE_USER_SUPPORT,obj)
  }
  craeteUserSupport(obj:any){
    return this.http.post(ConstantsRoutes.CREATE_USER_SUPPORT,obj)
  }
  getUserSupportList(obj:any){
    return this.http.post(ConstantsRoutes.GET_SUPPORT_LIST,obj)
  }
  getSupportUserById(){
   return this.http.get(ConstantsRoutes.GET_SUPPORT_LIST_BY_USER_ID)
  }
  createRolePermission(obj:any){
    return this.http.post(ConstantsRoutes.CREATE_ROLE_PERMISSION,obj)
  }
  getSupportById(obj:any){
    return this.http.post(ConstantsRoutes.GET_SUPPORT_BY_ID,obj)
   }

   getUserDetailsById(obj:any){
    return this.http.post(ConstantsRoutes.GET_USER_DETAILS_BY_ID,obj)
   }
}
