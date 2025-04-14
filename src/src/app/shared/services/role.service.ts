import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';
import { HttpService } from './http.service';
import { SessionService } from './session.service';
import { ApplicationConstants } from '../model/application.constants';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpService,
    private sessionService: SessionService,
  ) { }

  getUserMenuByRoleId(obj: any) {
    {
      return this.http.get(ConstantsRoutes.USER_MENU_BY_ROLE_URL + obj);
    }
  }

  getRoleList() {
    return this.http.get(ConstantsRoutes.GET_ROLE_LIST)
  }
  getpostManUrl(){
    return this.http.get(ConstantsRoutes.POSTMANURL)
  }


createUser(obj:any){
  return this.http.post(ConstantsRoutes.createUser,obj);

}
loginUser(obj:any){
  return this.http.post(ConstantsRoutes.userLogin,obj)
}

  getRoleListAsc() {
    return this.http.get(ConstantsRoutes.GET_ROLE_LIST_ASC)
  }
  createRole(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_ROLE, obj)
  }
  updateRole(obj: any) {
    return this.http.post(ConstantsRoutes.UPADTE_ROLE, obj)
  }
  

  getRolePermissionById(obj: any) {
    return this.http.post(ConstantsRoutes.GET_BY_ID_ROLE_PERMISSION, obj)
  }
  createRolePermission(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_ROLE_PERMISSION, obj)
  }
  updateRolePermission(obj: any) {
    return this.http.put(ConstantsRoutes.UPDATE_ROLE_PERMISSION, obj)
  }
  getRolePermissionList() {
    return this.http.get(ConstantsRoutes.GET_ROLE_PERMISSION);
  }


  /**
     * Responsible to check the user roles
     * @param requestedRoles accept roles from
     * @param functionalityName this is the functionalityName will pass if we want special condition to check on the menu name
     * @returns
     */
  public checkAuthRole(
    requestedRoles: string[],
    requestedMenu = []
  ): boolean {
    let userRoles: any[] = JSON.parse(this.sessionService.getParameterDataFromLocalStorage(
      ApplicationConstants.USER_PERMISSIONS) || '[]');
    let isRole: boolean = false;
    if (userRoles && null != userRoles) {
      isRole = this.hasRoles(
        userRoles, // current user roles access
        requestedRoles, // requested user roles access check
        requestedMenu, // requested user menus access check
      );
    }
    return isRole;
  }

  /**
   * HELPER method for checkAuthRoles()
   * @param userRolesArray
   * @param requestedRoles
   * @returns
   */
  private hasRoles(
    userRolesArray: string[],
    requestedRoles: string[],
    requestedMenu: string[],
  ) {
    // here check both activities & roles
    const isMenuAVailable: any = userRolesArray.find((e: any) => e.menuId == requestedMenu[0]);
    if (isMenuAVailable) {
      let flag = true;
      requestedRoles.forEach(element => {
        if (isMenuAVailable[element] == false)
          flag = false;
      });
      return flag;
    } else {
      return false;
    }

  }
}
