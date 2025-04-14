// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class ConstantsRoutes {
  static EMAIL_PATTERN(EMAIL_PATTERN: any): import("@angular/forms").ValidatorFn {
    throw new Error('Method not implemented.');
  }

  public static readonly Main_URL = 'http://108.60.212.46:8092/';
  private static readonly LOGIN_MAIN_URL = '://108.60.212.46:8092/';
  private static readonly LOCAL_MAIN_URL = 's://localhost:7222/';
  public static readonly POSTMANURL  = 'getMolecularToEmpiricalRecords';
  public static readonly createUser = 'createUser';
  public static readonly userLogin='login';


  // All api urls
  public static readonly LOGIN_URL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/identity/login';

  public static readonly RESET_PASSWORD = 'api/identity/resetPassword';
  public static readonly FORGOT_PASSWORD = 'api/identity/forgotpassword?email=';
  public static readonly VERIFY_CODE = 'api/identity/verifycode';

  //Role API    getUserMenuByRoleId?roleId=';
  //NEW         getMenuDetailByRoleId?roleId=';
  public static readonly USER_MENU_BY_ROLE_URL = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/subMenuMaster/getMenuDetailByRoleId?roleId=';

  public static readonly GET_ROLE_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/role/getRoleList';
  public static readonly GET_ROLE_LIST_ASC = ConstantsRoutes.LOGIN_MAIN_URL + 'api/role/getRoleListDetails';
  public static readonly CREATE_ROLE = ConstantsRoutes.LOGIN_MAIN_URL + 'api/role/createRole';
  public static readonly UPADTE_ROLE = ConstantsRoutes.LOGIN_MAIN_URL + 'api/role/updateRole';

  //Role Permssion

  public static readonly GET_ROLE_PERMISSION = ConstantsRoutes.LOGIN_MAIN_URL + 'api/rolePermission/getRolePermissionList';
  public static readonly CREATE_ROLE_PERMISSION = ConstantsRoutes.LOGIN_MAIN_URL + 'api/role/';
  public static readonly UPDATE_ROLE_PERMISSION = ConstantsRoutes.LOGIN_MAIN_URL + 'api/rolePermission/updateRolePermission';
  public static readonly GET_BY_ID_ROLE_PERMISSION = ConstantsRoutes.LOGIN_MAIN_URL + 'api/rolePermission/getRolePermissionById';

  //SubMenu api urls
  public static readonly MASTERMENU_LIST_URL = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/subMenuMaster/getMenuMasterList';
  public static readonly CREATE_SUBMENU_URL = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/masterMenu/createSubMenuMaster';
  public static readonly UPDATE_SUBMENU_URL = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/masterMenu/updateSubMenuMaster';
  public static readonly GET_SUBMENU_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/masterMenu/getSubMenuMasterById?id=';

  //Patient API
  public static readonly GET_PATIENT_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/patient/getPatientList';
  public static readonly GET_PATIENT_DETAILS = ConstantsRoutes.LOGIN_MAIN_URL + 'api/patient/getPatientDetail';
  public static readonly PATIENT_LIST_HOSPITAL_ADMIN = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/patient/getPatientListByHospitalAdmin';
  public static readonly PATIENT_PROFILE = ConstantsRoutes.LOGIN_MAIN_URL + 'api/patient/getPatientProfile';
  public static readonly GET_PATIENT_LIST_BY_HOSPITAL = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/patient/getPatientListByHospital';
  public static readonly GET_PATIENT_LIST_BY_HOSPITAL_ASC = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/patient/getPatientListByHospital';
  public static readonly CREATE_PATIENT = ConstantsRoutes.LOGIN_MAIN_URL + 'api/patient/patientCreateLite';
  public static readonly UPDATE_PATIENT = ConstantsRoutes.LOGIN_MAIN_URL + 'api/patient/patientUpdateLite';
  public static readonly GET_PATIENT_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/patient/getPatientById';
  public static readonly GET_PATIENT_HISTORY = ConstantsRoutes.LOGIN_MAIN_URL + 'api/patient/getPatientHistory';

  //User API
  public static readonly USER_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/getUserList?tenantId=';
  public static readonly USER_LIST_ADMIN = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/getUserList';
  public static readonly UPDATE_USER_PASSWORD = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/updateUserPassword';
  public static readonly GET_USER_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/getUserById';
  public static readonly CREATE_USER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/createUser';
  public static readonly UPDATE_USER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/updateUser';
  public static readonly GET_REFERANCE_DETAIL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/getReferanceDetail';
  public static readonly CANCEL_USER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/deleteUser';
  public static readonly CHANGE_PASSWORD = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/ChangePassword';
  public static readonly CHANGE_PROFILE_DETAIL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/ChangeProfileDetail'
  public static readonly UPDATE_USER_SUPPORT = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/UpdateUserSupport'
  public static readonly CREATE_USER_SUPPORT = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/CreateUserSupport';
  public static readonly GET_SUPPORT_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/getSupportList';
  public static readonly GET_SUPPORT_LIST_BY_USER_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/getSupportListByUserId';
  public static readonly GET_SUPPORT_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/getSupportById'
  public static readonly GET_USER_DETAILS_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/user/getUserDetailById'



  //Doctor API
  public static readonly GET_DOCTOR_LIST_BY_HOSPITAL = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/doctor/getDoctorListByHospital';
  public static readonly GET_DOCTOR_LIST_BY_HOSPITAL_ASC = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/doctor/getDoctorListByHospital';
  public static readonly GET_DOCTOR_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctor/getDoctorList';
  public static readonly DOCTOR_SCHEDULE = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctor/createDoctorSchedule';
  public static readonly DOCTOR_LIST_HOSPITAL_ADMIN = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/doctor/getDoctorListByHospitalAdmin';
  public static readonly CREATE_DOCTOR = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctor/createDoctor';
  public static readonly UPDATE_DOCTOR = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctor/updateDoctor';
  public static readonly GET_DOCTOR_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctor/getDoctorById';
  public static readonly GET_DOCTOR_SPECIFICATION = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctorSpecialityMaster/getDoctorSpecialityMasterList?tenantId=';
  public static readonly UPDATE_DOCTOR_SCHEDULE = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctor/updateDoctorSchedule'
  public static readonly GET_DOCTOR_LIST_BY_TENANT_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctor/getDoctorListByTenantId'

  public static readonly GET_DOCTOR_SCHEDULE_LIST_BY_DOCTOR_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctor/getDoctorScheduleListByDoctorId'



  //Appointment API
  public static readonly GET_DOCTOR_SCHEDULE_LIST = ConstantsRoutes.LOGIN_MAIN_URL +
    'api/appoinment/getAppoinmentScheduleList';
  public static readonly GET_APPOINMENT_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/appoinmentById';
  public static readonly GET_APPOINMENT_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/getAppointmentList';
  public static readonly CREATE_APPOINMENT = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/appoinmentCreate';
  public static readonly CANCEL_APPOINMENT = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/cancelAppoinment';
  public static readonly APPOINMENT_HISTORY = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/getAppointmentHistory';
  public static readonly APPOINMENT_GET_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/';
  public static readonly UPDATE_APPOINMENT = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/patientAppoinmentUpdate';
  public static readonly UPDATE_PATIENT_APPOINTMENT_PAYMENT = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/updatePatientAppointmentPayment';
  public static readonly GET_TIME_ZONE = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/getTimeZone';
  public static readonly GET_TRANSACTION_BY_PATIENT = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/getTransactionsByPatient';
  public static readonly GET_TRANSACTION_BY_PAYMENT_SOURCE = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/getTransactionsByPaymentSource';
  public static readonly GET_PRINT_PRESCRIPTION_DETAILS = ConstantsRoutes.LOGIN_MAIN_URL + 'api/appoinment/getPrintPrescriptionDetail';


  // https://localhost:7222/api/appoinment/patientAppoinmentUpdate

  //Hospital API
  public static readonly GET_HOSPITAL_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/hospital/GetHospitalById?id=';
  public static readonly GET_HOSPITAL_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/hospital/getHospitalList';
  public static readonly CREATE_HOSPITAL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/hospital/createHospital';
  public static readonly UPDATE_HOSPITAL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/hospital/updateHospital';
  public static readonly GET_HOSPITAL_LIST_ASC = ConstantsRoutes.LOGIN_MAIN_URL + 'api/hospital/getHospitalListDetails';

  //Examination API
  public static readonly CREATE_PATIENT_EXAMINATION = ConstantsRoutes.LOGIN_MAIN_URL + 'api/examination/createPatientExamination';
  public static readonly GET_EXAMINATION_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/examination/getPatientExaminationById';
  public static readonly UPDATE_PATIENT_EXAMINATION = ConstantsRoutes.LOGIN_MAIN_URL + 'api/examination/updatePatientExamination';

  //Patient Documents API 
  public static readonly GET_PATIENT_DOCUMENT_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/patientDocuments/getPatientDocumentsList';
  public static readonly CREATE_PATIENT_DOCUMENT = ConstantsRoutes.LOGIN_MAIN_URL + 'api/patientDocuments/createPatientDocuments';

  //Patient Symptom  
  public static readonly GET_SYMPTOS_MASTER_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/symptomMaster/getSymptomMasterList';
  public static readonly CRAETE_SYMPTOS_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/symptomMaster/createSymptomMaster';
  public static readonly CRAETE_PATIENT_SYMPTOS = ConstantsRoutes.LOGIN_MAIN_URL + 'api/symptomMaster/createPatientSymptom';


  //Patient Medicine createPatientMedicine
  public static readonly GET_DISEASE_GROUP_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/medicineMaster/getDiseaseGroupList';
  public static readonly GET_PATIENT_MEDICINE_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/medicineMaster/getPatientMedicineList';
  public static readonly CREATE_PATIENT_MEDICINE = ConstantsRoutes.LOGIN_MAIN_URL + 'api/medicineMaster/createPatientMedicine';
  public static readonly CREATE_MEDINICE_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/medicineMaster/createMedicineMaster';
  public static readonly GET_PATIENT_MEDICINE_BY_APPOINTMENTID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/medicineMaster/getPatientMedicineByAppointmentId';
  public static readonly GET_MEDICINE_MASTER_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/medicineMaster/getMedicineMasterList';
  
  public static readonly CREATE_PATIENT_MEDICINE_LITE = ConstantsRoutes.LOGIN_MAIN_URL + 'api/inventory/createItemLite';




  //Labaratory API 
  public static readonly GET_LABORATORY_MASTER_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/laboratoryMaster/getLaboratoryMasterList';
  public static readonly CREATE_LABORATORY_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/laboratoryMaster/createLaboratoryMaster';
  public static readonly GET_LABORATORY_MASTER_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/laboratoryMaster/getLaboratoryMasterById';
  public static readonly UPDATE_LABORATORY_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/laboratoryMaster/updateLaboratoryMaster';
  public static readonly DELETE_LABORATORY_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/laboratoryMaster/deleteLaboratoryMaster';
  public static readonly CREATE_PATIENT_LABORATORY = ConstantsRoutes.LOGIN_MAIN_URL + 'api/laboratoryMaster/CreatePatientLaboratory';



  //speciality  
  public static readonly GET_SPECILITIES_MASTER_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/specilitiesMaster/getSpecilitiesMasterList';
  public static readonly CREATE_SPECILITIES_DOCTOR_BY_HOSPITAL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/specilitiesMaster/createSpecilitiesMaster';
  public static readonly GET_SPECILITIES_MASTER_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/specilitiesMaster/getSpecilitiesMasterById';
  public static readonly UPDATE_SPECILITIES_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/specilitiesMaster/updateSpecilitiesMaster';
  public static readonly DELETE_SPECILITIES_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/specilitiesMaster/deleteSpecilitiesMaster';


  // TAB MASTER  /
  public static readonly GET_TAB_MASTER_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/getTabMasterList';
  public static readonly TAB_GROUP_FIELDS_BY_SPECILITY_TAB_DETAIL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/tabGroupFieldsBySpecilityTabDetail';
  public static readonly GET_TAB_LIST_BY_SPECILITY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/getTabListBySpecialityId';
  public static readonly SAVE_TAB = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/saveTabMaster';
  public static readonly DELETE_TAB = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/deleteTabMaster';

  public static readonly CREATE_TAB_AND_FIELDS_VALUE = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/getTabMasterList';
  public static readonly PATIENT_DYANAMIC_CREATE_DATA = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/patientDynamicCreateData';
  public static readonly GET_PATIENT_DYANAMIC_DATA = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/getPatientDynamicData';


  public static readonly GET_FORM_FIELDS_VALUE_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/getFormFieldValueById';

  // SPECIALITY /
  public static readonly GET_SPECIALITY_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctorSpecialityMaster/getSpecialityList';
  public static readonly GET_DCOTOR_SPECIALITY_MASTER_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctorSpecialityMaster/getDoctorSpecialityMasterList?tenantId=';
  public static readonly CREATE_HOSPITAL_SPECIALITIES = ConstantsRoutes.LOGIN_MAIN_URL + 'api/doctorSpecialityMaster/createHospitalSpecialityMaster';
  public static readonly UPDATE_SPECIALITIES = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/getFormFieldValueById';

  public static readonly PAYMENT_LOOKUP = ConstantsRoutes.LOGIN_MAIN_URL + 'api/comman/getLookUpTypeValueById';
  // FORMGROUP MASTER  /
  public static readonly GET_FORMGROUP_MASTER_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formGroup/getFormGroupList';
  public static readonly SAVE_FORMGROUP_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formGroup/saveFormGroup';
  public static readonly DELETE_FORMGROUP_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formGroup/deleteFormGroup';

  // FORMField MASTER  /
  public static readonly GET_FORMField_MASTER_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formField/getFormFieldList';
  public static readonly SAVE_FORMField_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formField/saveFormField';
  public static readonly DELETE_FORMField_MASTER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formField/deleteFormField';
  public static readonly GET_FORMFIELD_TYPE_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formField/formFieldTypeList';

  // SpecilityTab  /      
  public static readonly SAVE_SPECILITYTAB = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/saveSpecilityTabDetail';
  public static readonly DELETE_SPECILITYTAB = ConstantsRoutes.LOGIN_MAIN_URL + 'api/tabMaster/deleteTabSpecilityDetail';

  // TAB FORMGROUP DETAIL//
  public static readonly GET_FORMGROUPLIST_BY_TAB = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formGroup/getFormGroupListByTab';
  public static readonly SAVE_FORMGROUP_DETAIL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formGroup/saveFormGroupDetail';
  public static readonly DELETE_FORMGROUP_DETAIL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formGroup/deleteFormGroupDetail';

  // FORMFIELD DETAIL//
  public static readonly GET_FORMFIELDLIST_BY_TAB = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formField/getFormFieldDetail';
  public static readonly GET_FORMFIELDVALUE_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formField/getFormFieldValueByFieldIdAndTenantId';
  public static readonly SAVE_FORMFIELD_DETAIL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formField/saveFormFieldDetail';
  public static readonly DELETE_FORMFIELD_DETAIL = ConstantsRoutes.LOGIN_MAIN_URL + 'api/formField/deleteFormFieldDetail';

// https://localhost:7222/api/inventory/createInventory

//Inventory
public static readonly CRREATE_INVENTORY = ConstantsRoutes.LOGIN_MAIN_URL + 'api/inventory/createItem';
public static readonly GET_ITEM_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/inventory/getItemList';
public static readonly GET_ITEM_BY_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/inventory/getItemById?id=';
public static readonly UPDATE_ITEM = ConstantsRoutes.LOGIN_MAIN_URL + 'api/inventory/updateItem';
public static readonly GET_ITEM_TRANSACTION_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/inventory/getItemTransactionList';

//Transaction
public static readonly CREATE_TRASACTION = ConstantsRoutes.LOGIN_MAIN_URL + 'api/transcation/createTranscation';
public static readonly GET_TRANSACTION_LIST = ConstantsRoutes.LOGIN_MAIN_URL + 'api/transcation/getTranscationList';
public static readonly GET_PATIENT_TENANT_ID = ConstantsRoutes.LOGIN_MAIN_URL + 'api/transcation/getPatientListByTenantId';
public static readonly GET_TRANSACTION_NUMBER = ConstantsRoutes.LOGIN_MAIN_URL + 'api/transcation/getTranscationNumber';
public static readonly UPDATE_TRANSACTION_DETAILS = ConstantsRoutes.LOGIN_MAIN_URL + 'api/transcation/updateTranscationDetail';




}