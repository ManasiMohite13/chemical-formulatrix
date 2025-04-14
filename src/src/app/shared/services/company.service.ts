import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}
  getCompanyList() {
    return this.http.get(ConstantsRoutes.GET_COMPANY_LIST_URL);
  }
}
