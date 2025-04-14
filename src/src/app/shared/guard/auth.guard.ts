import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from '../services/auth.service'
import { ToasterService } from '../services/toaster.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, public router: Router,private tosterService:ToasterService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkIsAuthorized(
      'roleId',
          next,
    );
  }
   checkIsAuthorized(key: string, activateSnp: ActivatedRouteSnapshot): boolean {
    let flag = this.authService.isLoggedIn
    const roles:any  = activateSnp.data['roles']
    // let roles = activateSnp.data.roles;
    

    if (flag) {
      // this will be true if user is logged in
      if (!!roles) {
        // this is to check is roles provided to the route
  
         const checkRoleAvailable = this.authService.hasPermissions(
            roles,
         
          );
        
        if (checkRoleAvailable) {
          // if roles are provided validate the requested roles
          return true; // if roles are available then can redirect
        } else {
          // if roles are not available then redirect false
          // this.tosterService.showError('page Not Authorize','');
         this.router.navigate(['/pages/common/app-dashboard-alpha']);
          return false;
        }
      } else {
        // if roles are not provided no need to check them as theirs availability
        return true;
      }
    } else {
      // if user is not logged in redirect to un-auth and return false
      this.router.navigate(['/']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class DirectGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['pages'])
      return false
    }
    return true
  }
}

