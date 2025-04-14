import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';
import { IdModel } from '../model/idModel.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpService) {}

  getMenuMasterList() {
    return this.http.get(ConstantsRoutes.MASTERMENU_LIST_URL);
  }

  createSubMenuMaster(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_SUBMENU_URL, obj);
  }

  updateSubMenuMaster(obj: any) {
    return this.http.put(ConstantsRoutes.UPDATE_SUBMENU_URL, obj);
  }

  getSubMenuMasterById(id: any) {
    return this.http.get(ConstantsRoutes.GET_SUBMENU_BY_ID + id);
  }
}
