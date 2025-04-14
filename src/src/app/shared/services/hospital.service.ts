import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  constructor(private http: HttpClient) {}

  getHospitalList() {
    return this.http.get(ConstantsRoutes.GET_HOSPITAL_LIST);
  }
  
  getHospitalListAsc() {
    return this.http.get(ConstantsRoutes.GET_HOSPITAL_LIST_ASC);
  }
  getHospitalById(id: any) {
    return this.http.get(ConstantsRoutes.GET_HOSPITAL_BY_ID + id);
  }

  createHospital(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_HOSPITAL, obj);
  }

  updateHospital(obj: any) {
    return this.http.put(ConstantsRoutes.UPDATE_HOSPITAL, obj);
  }
  // getSpecialtiesList(tenantId){
  //   return this.http.get(`${ConstantsRoutes.GET_SPECIALITY_LIST}?tenantId=${tenantId}` );
  // }
  getSpecialityList(){
    return this.http.get(ConstantsRoutes.GET_SPECIALITY_LIST)
  }
  getDoctorSpecilityMasterList(id:any) {
    return this.http.get(ConstantsRoutes.GET_DCOTOR_SPECIALITY_MASTER_LIST + id);
  }
  createHospitalSpeciality(obj:any){
    return this.http.post(ConstantsRoutes.CREATE_HOSPITAL_SPECIALITIES,obj );
    
  }
  editSpeciality(obj:any){
    return this.http.put(ConstantsRoutes.UPDATE_SPECIALITIES,obj );
    
  }
  
  getLookUpTypeValueById(obj: any) {
    return this.http.post(ConstantsRoutes.PAYMENT_LOOKUP , obj);
  }
}
