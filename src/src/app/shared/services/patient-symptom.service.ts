import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root',
})
export class PatientSymptomService {
  constructor(private http: HttpClient) {}

  getPatientExaminationById(obj: any) {
    return this.http.post(ConstantsRoutes.GET_EXAMINATION_BY_ID, obj);
  }

  createPatientExamination(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_PATIENT_EXAMINATION, obj);
  }

  updatePatientExamination(obj: any) {
    return this.http.put(ConstantsRoutes.UPDATE_PATIENT_EXAMINATION, obj);
  }
}
