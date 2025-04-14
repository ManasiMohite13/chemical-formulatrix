import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  public selectedHospital = null;
  constructor(private http: HttpClient) { }

  getPatientProfile() {
    return this.http.get(ConstantsRoutes.PATIENT_PROFILE);
  }
  getPatientListByHospital(tenantId) {
    return this.http.get(ConstantsRoutes.GET_PATIENT_LIST_BY_HOSPITAL + '?tenantId=' + tenantId);
  }
  getPatientListByHospitals() {
    return this.http.get(ConstantsRoutes.GET_PATIENT_LIST_BY_HOSPITAL);
  }
  getPatientListByHospitalAsc(tenantId) {
    return this.http.get(ConstantsRoutes.GET_PATIENT_LIST_BY_HOSPITAL_ASC + '?tenantId=' + tenantId);
  }
  getPatientlist(obj: any) {
    return this.http.post(ConstantsRoutes.GET_PATIENT_LIST, obj);
  }
  getPatientDetail(obj: any) {
    return this.http.post(ConstantsRoutes.GET_PATIENT_DETAILS, obj);
  }

  getPatientListByHospitalAdmin(obj: any) {
    return this.http.post(ConstantsRoutes.PATIENT_LIST_HOSPITAL_ADMIN, obj);
  }

  createPatient(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_PATIENT, obj);
  }

  upadtePatient(obj: any) {
    return this.http.put(ConstantsRoutes.UPDATE_PATIENT, obj);
  }
  getPatientById(obj: any) {
    return this.http.post(ConstantsRoutes.GET_PATIENT_BY_ID, obj);
  }

  getExaminationById(obj: any) {
    return this.http.post(ConstantsRoutes.GET_EXAMINATION_BY_ID, obj)
  }

  createPatientExamination(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_PATIENT_EXAMINATION, obj);
  }

  updatePatientExamination(obj: any) {
    return this.http.post(ConstantsRoutes.UPDATE_PATIENT_EXAMINATION, obj);
  }

  getPatientDocumentList() {
    return this.http.get(ConstantsRoutes.GET_PATIENT_DOCUMENT_LIST);
  }

  createPatientDocument(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_PATIENT_DOCUMENT, obj);
  }

  getSymptosMasterList() {
    return this.http.get(ConstantsRoutes.GET_SYMPTOS_MASTER_LIST);
  }
  createSymptosMaster(obj: any) {
    return this.http.post(ConstantsRoutes.CRAETE_SYMPTOS_MASTER, obj);
  }

  createPatientSymptos(obj: any) {
    return this.http.post(ConstantsRoutes.CRAETE_PATIENT_SYMPTOS, obj);
  }

  getDiseaseGroupList() {
    return this.http.get(ConstantsRoutes.GET_DISEASE_GROUP_LIST);
  }
  getPatientMedicineList(obj: any) {
    return this.http.post(ConstantsRoutes.GET_PATIENT_MEDICINE_LIST, obj);
  }
  createPatientMedicine(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_PATIENT_MEDICINE, obj);
  }
  getPatientMedicineByAppoinementId(obj: any) {
    return this.http.post(ConstantsRoutes.GET_PATIENT_MEDICINE_BY_APPOINTMENTID, obj)
  }

  getPatientHistroy(obj: any) {
    return this.http.post(ConstantsRoutes.GET_PATIENT_HISTORY, obj)
  }

  createPatientMedicineMaster(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_PATIENT_MEDICINE_LITE, obj);
  }
  createMedicineMasterList() {
    return this.http.get(ConstantsRoutes.GET_MEDICINE_MASTER_LIST);
  }
  makePayment(obj: any) {
    return this.http.put(ConstantsRoutes.UPDATE_PATIENT_APPOINTMENT_PAYMENT, obj);
  }

  
}
