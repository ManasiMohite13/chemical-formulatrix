import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { SessionService } from './session.service';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpService,
    private sessionService: SessionService,
  ) { }

  createTransaction(obj: any) {
    return this.http.post(ConstantsRoutes.CREATE_TRASACTION, obj);
  }
  getTransactionList(obj: any) {
    return this.http.post(ConstantsRoutes.GET_TRANSACTION_LIST, obj);
  }

  getPatientListByTenantId() {
    return this.http.get(ConstantsRoutes.GET_PATIENT_TENANT_ID);
  }

  getTransactionNumber() {
    return this.http.get(ConstantsRoutes.GET_TRANSACTION_NUMBER);
  }

  updateTransactionDetails(obj:any) {
    return this.http.put(ConstantsRoutes.UPDATE_TRANSACTION_DETAILS,obj);
  }

}
