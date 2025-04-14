import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root'
})
export class DoctorSpecialityService {

  constructor(private http: HttpClient) {}

  doctorListByHospital() {
    return this.http.get(ConstantsRoutes.GET_SPECILITIES_MASTER_LIST);
  }

  createdoctorSpecilitySByHospital(obj:any) {
    return this.http.post(ConstantsRoutes.CREATE_SPECILITIES_DOCTOR_BY_HOSPITAL,obj);
  } 

  doctorSpeciltyById(obj:any) {
    return this.http.get(ConstantsRoutes.GET_SPECILITIES_MASTER_BY_ID,obj);
  }

  updatedoctorSpecilitySByHospital(obj:any) {
    return this.http.put(ConstantsRoutes.UPDATE_SPECILITIES_MASTER,obj);
  } 
  
  deleteSpecilitiesMaster(obj:any) {
    return this.http.delete(ConstantsRoutes.DELETE_SPECILITIES_MASTER,obj);
  } 
}
