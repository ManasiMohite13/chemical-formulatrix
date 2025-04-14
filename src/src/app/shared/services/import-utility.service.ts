import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root',
})
export class ImportUtilityService {
  constructor(private http: HttpClient) {}

  importEmployeeExcelData(file: File) {
    return this.http.post(ConstantsRoutes.IMPORT_EMPLOYEE_EXCEL, file);
  }

  getEmployeeExelHeader(): any {
    return this.http.get(ConstantsRoutes.GET_EMPLOYEE_EXCEL_HEADER, {
      responseType: 'blob',
    });
  }
}
