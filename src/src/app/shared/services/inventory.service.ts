import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  public selectedHospital = null;
  constructor(private http: HttpClient) { }

  getItemList(obj:any){
    return this.http.post(ConstantsRoutes.GET_ITEM_LIST,obj)
  }

  createInventory(obj: any) {
    return this.http.post(ConstantsRoutes.CRREATE_INVENTORY, obj);
  }

  getItemById(id:any){
    return this.http.get(ConstantsRoutes.GET_ITEM_BY_ID + id);
  }

  updtateItem(obj:any){
    return this.http.put(ConstantsRoutes.UPDATE_ITEM,obj);
  }

  getItemTransactionList(obj:any){
    return this.http.post(ConstantsRoutes.GET_ITEM_TRANSACTION_LIST,obj)
  }
}
