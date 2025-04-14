// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class ConstantsMessage {
  // All Constant Message Variables
  //Patterns Varibales
  public static readonly CONTACT_NUMBER_PATTERN = '^[0-9]{10}$';
  public static readonly ONLY_LETTER_PATTERN = "^[\(\)A-Za-z ',_-]+$";
  public static readonly ONLY_LETTER_PATTERNS = "^[A-Za-z '-]+$";
  public static readonly ONLY_NUMBER_AND_CHARACTER_PATTERN = "^[a-zA-Z0-9 ]+$";
  public static readonly BLOOD_GROUP = "[ABO][+-]";
  public static readonly ONLY_ADDRESS = /^[a-zA-Z0-9\s,'-\/\[\]\(\)]*$/;
  public static readonly ONLY_QUALIFICATION = "^[\(\)A-Za-z ',_.-]+$";
  public static readonly ONLY_DOCTOR_FIRST_NAME = "^[A-Za-z '.-]+$";
  public static readonly ONLY_LABORATORY_ADDRESS = "^[A-Za-z '-]+$";
  public static readonly ONLY_PATIENT_ADDRESS = "^[A-Za-z '-\(\),.0-9]+$";
  public static readonly EIGHT_NUMBER_PATTERN = "^[0-9]{0,8}\.?[0-9]{0,2}$"
  public static readonly ONLY_CHAR_NUM_SPECIAL_CHARACTER='/^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-]+$/'
  public static readonly QTY_LENGTH='[0-9]{1,5}';
 public static readonly NUMMBER_LETTER_ONLY = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}";
  public static readonly CHARACTER_ONLY= '[0-9+_..-]{1,}[a-zA-Z]';

  public static readonly PANCARD_PATTERN = '/([A-Z]){5}([0-9]){4}([A-Z]){1}$/';
  public static readonly UPI_PATTERN = "^[0-9A-Za-z.-]{2,256}@[A-Za-z]{2,64}$"
  public static readonly LENGTH_VALIDATION = 30;
  public static readonly DESCRIPTION_LENGTH_VALIDATION = 500;
  public static readonly ONLY_LETTERS_WITH_SPACE = '^[a-zA-Z ]+$';
  public static readonly ONLY_LETTERS_WITH_SPACE_AND_SPCIALCHARACTER =
    '^[a-zA-Z ,-]+$';
    public static readonly LETTER_NUMBER_ALL = /^[0-9a-zA-Z!@#$%^&*()_+{}[\]:;<>,.?~\\|\-="']+$/;
  public static readonly EMAIL_PATTERN =
    '[a-zA-Z0-9+_..-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,3}';
  public static readonly POSITIVE_INTEGERS_PATTERN = /^[1-9]+[0-9]*$/;
  public static readonly ALPHA_ONLY_PATTERN = /^[A-Za-z\s]{1,60}$/;
  public static readonly ZIP_CODE_PATTERN = '[0-9]{6}';
  public static readonly RESET_PASSWORD_MESSAGE =
    'A reset password link has been sent to your registered email address ';
  public static readonly INVALID_MESSAGE = 'Your Account is Inactive, Please Contact Administrator !';
  public static readonly FILE_DOWNLOADED_MESSAGE =
    'File downloaded successfully!';
  public static readonly VETERINARY_WARNING_MESSAGE =
    'Please select veterinary report type!';
  public static readonly PASSWORD_UPDATED_SUCCESS =
    'Password updated successfully!';
  public static readonly RESET_PASSWORD_ERROR = 'Reset password error';
  public static readonly VALIDATION_PASSWORD_MESSAGE_INFO =
    'Password must have minimum 8 character, one uppercase,one lowercase,number and special character';
  public static readonly EMPTY_RECORD_MESSAGE = 'No records available!';
  public static readonly TERMS_CONDITION_MESSAGE =
    'Terms and conditions file uploaded successfully!';
  public static readonly UPDATE_PROFILE = 'Profile updated successfully!';
  public static readonly UPDATE_PROFILE_PICTURE =
    'Profile picture uploaded successfully!';
  public static readonly DELETE_PROFILE_PICTURE =
    'Profile picture deleted successfully!';
  public static readonly DELETE_TERMS_CONDITION_MESSAGE =
    'Terms and conditions deleted successfully!';
  public static readonly FILE_ACCEPT_VALIDATION_MESSAGE =
    'File accepts only PDF, Doc, Docx format!';
  public static readonly FILE_ACCEPT_IMAGES_VALIDATION_MESSAGE =
    'Only png, jpg, jpeg format accepted!';
  public static readonly CONFIRM_MESSAGE =
    'Are you sure, you want to update status?';
  public static readonly CONFIRM_MESSAGE_DELETE =
    'Are you sure, you want to delete picture?';
  public static readonly CONFIRM_MESSAGE_DELETEFile =
    'Are you sure, you want to delete this file?';
  public static readonly CONFIRM_MESSAGE_LOGOUT =
    'Are you sure, you want to logout?';
  public static readonly CONFIRM_POPUP_TITLE = 'Update confirmation';
  public static readonly CONFIRM_POPUP_TITLE_LOGOUT = 'Logout';
  public static readonly DELETE_CONFIRM_POPUP_TITLE = 'Delete Confirmation';
  public static readonly DELETE_EMPLOYEE_CONFIRMATION_MESSAGE =
    'Are you sure, you want to delete this employee?';
  public static readonly CANCEL_CONFIRMATION_MESSAGE =
    'Are you sure, you want to cancel this?';
  public static readonly CANCEL_APPOINMENT_MESSAGE =
    'Are you sure, you want to cancel this Appointment?';
  public static readonly CANCEL_CONFIRM_POPUP_TITLE = 'Cancel';
  public static readonly CONFIRM_POPUP_TITLES = 'Finish';
  public static readonly CONFIRM = 'Confirm';
  public static readonly ROLE_CREATE = 'Role created successfully!';
  public static readonly ROLE_UPDATE = 'Role updated successfully!';
  public static readonly FINISH_CONFIRMATION_MESSAGE = 'Are you sure, you want to Finish this?';
  public static readonly DELETE_CONFIRMATION_MESSAGE = 'Are you sure, you want to delete this?';
  public static readonly DELETE_CONFIRMATION_Tab_MESSAGE = 'Are you sure, you want to delete this tab?';
  public static readonly DELETE_CONFIRMATION_FORMGROUP_MESSAGE = 'Are you sure, you want to delete this formGroup?';
  public static readonly DELETE_CONFIRMATION_FORMFIELD_MESSAGE = 'Are you sure, you want to delete this formField?';
  public static readonly CREATE_CONFIRMATION_MESSAGE = 'Are you sure, you want to Add this?';

  //Appointment
  public static readonly APPOINMENT_CONFIRM = 'Appointment added successfully!';
  public static readonly APPOINMENT_CANCEL =
    'Your appointment has been cancelled!';
  public static readonly APPOINMENT_UPDATE = 'Appointment Reschedule successfully!';

  //Support 
  public static readonly SUPPORT_UPDATE = 'Support updated successfully!';
  public static readonly SUPPORT_CREATE = 'Support Added successfully!';


  //Hospital
  public static readonly HOSPITAL_CONFIRM =
    'Hospital  added successfully!';
  public static readonly HOSPITAL_UPDATE =
    'Hospital  updated successfully!';

  //Doctor
  public static readonly DOCTOR_UPDATE = 'Doctor detail updated successfully!';
  public static readonly DOCTOR_CREATE = 'Doctor detail created successfully!';
  public static readonly DOCTOR_SCHEDULE_CREATE =
    'Doctor schedule created successfully!';
  public static readonly DOCTOR_SCHEDULE_UPDATE = 'Doctor schedule updated successfully!';

  //Patient
  public static readonly PATIENT_CREATE = 'Patient detail created successfully!';
  public static readonly PATIENT_UPDATE = 'Patient detail updated successfully!';

  //User
  public static readonly USER_CREATE = 'User detail created successfully!';
  public static readonly USER_UPDATE = 'User detail updated successfully!';
  public static readonly USER_PASS_UPDATE =
    'User password updated successfully!';
  public static readonly CANCEL_USER = 'User detail is deleted successfully!';
  //Support 
  public static readonly USER_DETAILS =
    'User Details updated successfully!';
  public static readonly TICKES_UPDATE =
    'Your Support ticket has been updated!';

  //Patient
  public static readonly PAYMENT_STATUS_UPDATE = 'Payment added successfully!';

  // Laboratory
  public static readonly CREATE_LABORATORY =
    'Laboratory Created successfully!';
  public static readonly UPDATE_LABORATORY =
    'Laboratory Updated successfully!';
  public static readonly DELETE_LABORATORY =
    'Laboratory Deleted successfully!';

  //Role
  public static readonly CREATE_ROLE =
    'Role Created successfully!';
  public static readonly UPDATE_ROLE =
    'Role Updated successfully!';

  public static readonly CREATE_ROLE_PERMISSION =
    'Role Permission Created successfully!';
  public static readonly UPDATE_ROLE_PERMISSION =
    'Role Permission Updated successfully!';


  public static readonly CREATE_PATIENT_MEDICINE =
    'Patient Medicine Added successfully!';

  public static readonly TABLE_ROW_DELETE =
    'Selected Row deleted successfully!';

  /// Tab Master
  public static readonly CREATE_TAB = 'Tab created successfully!';
  public static readonly UPDATE_TAB = 'Tab updated successfully!';
  public static readonly DELETE_TAB = 'Tab deleted successfully!';

  /// Form Group
  public static readonly CREATE_FORMGROUP = 'FormGroup created successfully!';
  public static readonly UPDATE_FORMGROUP = 'FormGroup updated successfully!';
  public static readonly DELETE_FORMGROUP = 'FormGroup deleted successfully!';

  /// Form Field
  public static readonly CREATE_FORMFIELD = 'FormField created successfully!';
  public static readonly UPDATE_FORMFIELD = 'FormField updated successfully!';
  public static readonly DELETE_FORMFIELD = 'FormField deleted successfully!';

  /// Specility Tab Detail
  public static readonly TAB_ADDED = 'Tab added successfully!';

  public static readonly CREATE_TAB_DETAIL = 'Tab detail added successfully!';
  public static readonly UPDATE_TAB_DETAIL = 'Tab detail updated successfully!';
  public static readonly DELETE_TAB_DETAIL = 'Tab detail deleted successfully!';


  ///  Form Group Detail
  public static readonly CREATE_FORMGROUP_DETAIL = 'Form Group detail added successfully!';
  public static readonly UPDATE_FORMGROUP_DETAIL = 'Form Group detail updated successfully!';
  public static readonly DELETE_FORMGROUP_DETAIL = 'Form Group detail deleted successfully!';

  ///  Form Field Detail
  public static readonly CREATE_FORMFIELD_DETAIL = 'Form Field detail added successfully!';
  public static readonly UPDATE_FORMFIELD_DETAIL = 'Form Field detail updated successfully!';
  public static readonly DELETE_FORMFIELD_DETAIL = 'Form Field detail deleted successfully!';

  //Dyanamic Forms 

  public static readonly DYANAMIC_FORMS =
    'Created Data Saved successfully!';


  //speciality
  public static readonly SPECIALITY_CREATE = 'Specialities created successfully!';
  public static readonly SPECIALITY_UPDATE = 'Specialities updated successfully!';

  //Inventory
  public static readonly CREATE_INVENTORY = 'Inventory created successfully!';
  public static readonly UPDATE_INVENTORY = 'Inventory updated successfully!';

  //Transaction Bill
  public static readonly CREATE_BILL = 'Patient Bill created successfully!';

}
