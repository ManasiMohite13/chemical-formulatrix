import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  constructor(private http: HttpClient) {}

  getLaboratoryMasterList(obj:any) {
    return this.http.post(ConstantsRoutes.GET_LABORATORY_MASTER_LIST,obj);
  }
  createLaboratoryMaster(obj:any) {
    return this.http.post(ConstantsRoutes.CREATE_LABORATORY_MASTER,obj);
  }
  getLaboratoryMasterById(obj:any){
    return this.http.post(ConstantsRoutes.GET_LABORATORY_MASTER_BY_ID,obj);
  }

  updateLaboratoryMaster(obj:any){
    return this.http.put(ConstantsRoutes.UPDATE_LABORATORY_MASTER,obj);
  }
  deleteLaboratoryMaster(obj:any){
     return this.http.put(ConstantsRoutes.DELETE_LABORATORY_MASTER,obj);
  }

}
