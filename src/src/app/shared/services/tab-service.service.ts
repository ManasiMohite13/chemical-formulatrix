import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Injectable({
  providedIn: 'root'
})
export class TabServiceService {

  constructor(private http: HttpClient) { }

  getTabMasterList() {
    return this.http.get(ConstantsRoutes.GET_TAB_MASTER_LIST);
  }

  saveTab(obj: any) {
    return this.http.post(ConstantsRoutes.SAVE_TAB, obj);
  }

  deleteTab(obj: any) {
    return this.http.put(ConstantsRoutes.DELETE_TAB, obj);
  }

  tabGroupFieldsBySpecilityTabDetail(obj: any) {
    return this.http.post(ConstantsRoutes.TAB_GROUP_FIELDS_BY_SPECILITY_TAB_DETAIL, obj);
  }

  getTabListBySpecilityId(obj: any) {
    return this.http.post(ConstantsRoutes.GET_TAB_LIST_BY_SPECILITY_ID, obj);
  }

  // createTabsAndFiledsValue(obj: any) {
  //   return this.http.post(ConstantsRoutes.CREATE_TAB_AND_FIELDS_VALUE, obj);

  // }

  patientDyanamicCreateData(obj: any) {
    return this.http.post(ConstantsRoutes.PATIENT_DYANAMIC_CREATE_DATA, obj);

  }

  getPatientDyanamicData(obj: any) {
    return this.http.post(ConstantsRoutes.GET_PATIENT_DYANAMIC_DATA, obj);

  }

  getFormFieldsValueById(obj: any) {
    return this.http.post(ConstantsRoutes.GET_FORM_FIELDS_VALUE_BY_ID, obj);
  }

  /////////Form Group Methods//////////////

  getFormGroupList() {
    return this.http.get(ConstantsRoutes.GET_FORMGROUP_MASTER_LIST);
  }

  saveFormGroup(obj: any) {
    return this.http.post(ConstantsRoutes.SAVE_FORMGROUP_MASTER, obj);
  }

  deleteFormGroup(obj: any) {
    return this.http.put(ConstantsRoutes.DELETE_FORMGROUP_MASTER, obj);
  }

  /////////Form Field Methods//////////////

  getFormFieldList() {
    return this.http.get(ConstantsRoutes.GET_FORMField_MASTER_LIST);
  }

  saveFormField(obj: any) {
    return this.http.post(ConstantsRoutes.SAVE_FORMField_MASTER, obj);
  }

  deleteFormField(obj: any) {
    return this.http.put(ConstantsRoutes.DELETE_FORMField_MASTER, obj);
  }

  getFormFieldTypeList() {
    return this.http.get(ConstantsRoutes.GET_FORMFIELD_TYPE_LIST);
  }

  /////////Specility Tab Methods//////////////

  saveSpecilityTab(obj: any) {
    return this.http.post(ConstantsRoutes.SAVE_SPECILITYTAB, obj);
  }

  deleteSpecilityTab(obj: any) {
    return this.http.put(ConstantsRoutes.DELETE_SPECILITYTAB, obj);
  }

  // FORMGROUP BY Tab Methods//

  getFormGroupListByTab(obj: any) {
    return this.http.post(ConstantsRoutes.GET_FORMGROUPLIST_BY_TAB, obj);
  }

  saveFormGroupDetail(obj: any) {
    return this.http.post(ConstantsRoutes.SAVE_FORMGROUP_DETAIL, obj);
  }

  deleteFormGroupDetail(obj: any) {
    return this.http.put(ConstantsRoutes.DELETE_FORMGROUP_DETAIL, obj);
  }

  // FORMFIELD DETAIL Methods//

  getFormFieldDetailList(obj: any) {
    return this.http.post(ConstantsRoutes.GET_FORMFIELDLIST_BY_TAB, obj);
  }

  getFormFieldValuebyIdAndTenantId(obj: any) {
    return this.http.post(ConstantsRoutes.GET_FORMFIELDVALUE_BY_ID, obj);
  }

  saveFormFieldDetail(obj: any) {
    return this.http.post(ConstantsRoutes.SAVE_FORMFIELD_DETAIL, obj);
  }

  deleteFormFieldDetail(obj: any) {
    return this.http.put(ConstantsRoutes.DELETE_FORMFIELD_DETAIL, obj);
  }
}
