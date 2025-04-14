import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppoinmentsComponent } from './appoinments/add-appoinments/add-appoinments.component';
import { AppoinmentsListComponent } from './appoinments/appoinments-list/appoinments-list.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { EditAppoinmentsComponent } from './appoinments/edit-appoinments/edit-appoinments.component';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMedicalRecordsComponent } from './medical-records/add-medical-records/add-medical-records.component';
import { EditMedicalRecordsComponent } from './medical-records/edit-medical-records/edit-medical-records.component';
import { MedicalRecordsListComponent } from './medical-records/medical-records-list/medical-records-list.component';
import { PatientComponent } from './patient.component';
import { AddPrescriptionsComponent } from './prescriptions/add-prescriptions/add-prescriptions.component';
import { EditPrescriptionsComponent } from './prescriptions/edit-prescriptions/edit-prescriptions.component';
import { PrescriptionsListComponent } from './prescriptions/prescriptions-list/prescriptions-list.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: PatientComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'appoinments',
        component: AppoinmentsComponent,
      },
      {
        path: 'appoinments/appoinments-list',
        component: AppoinmentsListComponent,
      },
      {
        path: 'appoinments/add-appoinments',
        component: AddAppoinmentsComponent,
      },
      {
        path: 'appoinments/edit-appoinments',
        component: EditAppoinmentsComponent,
      },
      {
        path: 'billing',
        component: BillingComponent,
      },
      {
        path: 'patient/medical-records',
        component: MedicalRecordsListComponent,
      },
      {
        path: 'patient/add-medical-records',
        component: AddMedicalRecordsComponent,
      },
      {
        path: 'patient/edit-medical-records',
        component: EditMedicalRecordsComponent,
      },
      {
        path: 'prescriptions/prescriptions-list',
        component: PrescriptionsListComponent,
      },
      {
        path: 'prescriptions/add-prescriptions',
        component: AddPrescriptionsComponent,
      },
      {
        path: 'prescriptions/edit-prescriptions',
        component: EditPrescriptionsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
