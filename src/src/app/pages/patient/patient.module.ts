import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { SettingsComponent } from './settings/settings.component';
import { PatientComponent } from './patient.component';
import { AppoinmentsListComponent } from './appoinments/appoinments-list/appoinments-list.component';
import { AddAppoinmentsComponent } from './appoinments/add-appoinments/add-appoinments.component';
import { MedicalRecordsListComponent } from './medical-records/medical-records-list/medical-records-list.component';
import { AddMedicalRecordsComponent } from './medical-records/add-medical-records/add-medical-records.component';
import { PrescriptionsListComponent } from './prescriptions/prescriptions-list/prescriptions-list.component';
import { AddPrescriptionsComponent } from './prescriptions/add-prescriptions/add-prescriptions.component';
import { PatientRoutingModule } from './patient-routing.module';
import { EditAppoinmentsComponent } from './appoinments/edit-appoinments/edit-appoinments.component';
import { EditMedicalRecordsComponent } from './medical-records/edit-medical-records/edit-medical-records.component';
import { EditPrescriptionsComponent } from './prescriptions/edit-prescriptions/edit-prescriptions.component';

@NgModule({
  declarations: [
    AppoinmentsComponent,
    BillingComponent,
    DashboardComponent,
    MedicalRecordsComponent,
    PrescriptionsComponent,
    SettingsComponent,
    PatientComponent,
    AppoinmentsListComponent,
    AddAppoinmentsComponent,
    MedicalRecordsListComponent,
    AddMedicalRecordsComponent,
    PrescriptionsListComponent,
    AddPrescriptionsComponent,
    EditAppoinmentsComponent,
    EditMedicalRecordsComponent,
    EditPrescriptionsComponent,
  ],
  imports: [CommonModule, PatientRoutingModule],
})
export class PatientModule {}
