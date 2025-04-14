import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root'
})
export class ManagePermissionService {

  constructor(private http: HttpService) { }

  getRolePermissionList(){
    return this.http.get(ConstantsRoutes.GET_ROLE_PERMISSION)
  }
}

