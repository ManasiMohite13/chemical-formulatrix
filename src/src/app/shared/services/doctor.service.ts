import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  public seletectedHospital = null;
  constructor(private http: HttpClient) {}

  doctorListByHospital(tenantId: string) {
    return this.http.get(ConstantsRoutes.GET_DOCTOR_LIST_BY_HOSPITAL+'?tenantId='+tenantId);
  }
  doctorListByHospitals() {
    return this.http.get(ConstantsRoutes.GET_DOCTOR_LIST_BY_HOSPITAL);
  }

  doctorListByHospitalsAsc() {
    return this.http.get(ConstantsRoutes.GET_DOCTOR_LIST_BY_HOSPITAL_ASC);
  }
  getDoctorList(obj: any) {
    return this.http.post(ConstantsRoutes.GET_DOCTOR_LIST, obj);
  }
  createDoctorSchedule(obj: any) {
    return this.http.post(ConstantsRoutes.DOCTOR_SCHEDULE, obj);
  }
  getDoctorListByHospitalAdmin(obj: any) {
    return this.http.post(ConstantsRoutes.DOCTOR_LIST_HOSPITAL_ADMIN, obj);
  }
  createDoctor(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_DOCTOR, obj);
  }
  updateDoctor(obj: any) {
    return this.http.put(ConstantsRoutes.UPDATE_DOCTOR, obj);
  }

  getDoctorById(obj: any) {
    return this.http.post(ConstantsRoutes.GET_DOCTOR_BY_ID, obj);
  }

  getDoctorScheduleList(obj: any) {
    return this.http.post(ConstantsRoutes.GET_DOCTOR_SCHEDULE_LIST, obj);
  }
  getDoctorSpecility(id:any) {
    return this.http.get(ConstantsRoutes.GET_DOCTOR_SPECIFICATION + id);
  }
  updateDoctorSchedule(obj:any){
    return this.http.post(ConstantsRoutes.UPDATE_DOCTOR_SCHEDULE,obj)
  }
    getDoctorListByTenantId(obj:any){
    return this.http.post(ConstantsRoutes.GET_DOCTOR_LIST_BY_TENANT_ID,obj)
  }

  getDoctorScheduleListByDoctorId(obj:any){
    return this.http.post(ConstantsRoutes.GET_DOCTOR_SCHEDULE_LIST_BY_DOCTOR_ID,obj)
  }
}
