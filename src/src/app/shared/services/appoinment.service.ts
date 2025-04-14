import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root',
})
export class AppoinmentService {
  constructor(private http: HttpClient) {}
  // patient/patientAppoinmentById
  createAppoinment(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_APPOINMENT, obj);
  }

  getPatientlist(obj: any) {
    return this.http.post(ConstantsRoutes.GET_PATIENT_LIST, obj);
  }

  getAppoinmentList(obj: any) {
    return this.http.post(ConstantsRoutes.GET_APPOINMENT_LIST, obj);
  }
  getAppoinmentById(obj: any) {
    return this.http.post(ConstantsRoutes.GET_APPOINMENT_BY_ID, obj);
  }
  cancelAppoinment(obj: any) {
    return this.http.put(ConstantsRoutes.CANCEL_APPOINMENT, obj);
  }
  appoinmentGetById(obj: any) {
    return this.http.post(ConstantsRoutes.APPOINMENT_GET_BY_ID, obj);
  }
  updateAppoinment(obj: any) {
    return this.http.post(ConstantsRoutes.UPDATE_APPOINMENT, obj);
  }
  getTimeZone() {
    return this.http.get(ConstantsRoutes.GET_TIME_ZONE);
  }

  getTransactionByPatient(obj:any) {
    return this.http.post(ConstantsRoutes.GET_TRANSACTION_BY_PATIENT,obj);
  }
  
  getTransactionByPaymentSource(obj:any) {
    return this.http.post(ConstantsRoutes.GET_TRANSACTION_BY_PAYMENT_SOURCE,obj);
  }
  
  getPrintPrescriptionDeatils(obj:any) {
    return this.http.post(ConstantsRoutes.GET_PRINT_PRESCRIPTION_DETAILS,obj);
  }
}
