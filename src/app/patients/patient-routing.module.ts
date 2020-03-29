import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from '../patients/patient-list/patient-list.component';
import { PatientDetailsComponent } from '../patients/patient-details/patient-details.component';
import { PatientCreateComponent } from '../patients/patient-create/patient-create.component';
import { PatientUpdateComponent } from '../patients/patient-update/patient-update.component';
//import { PatientDeleteComponent } from '../patients/patient-delete/owner-delete.component';

const patientRoutes: Routes = [
  { path: 'patients', component: PatientListComponent },
  { path: 'details/:id', component: PatientDetailsComponent},
  { path: 'create', component: PatientCreateComponent },
  { path: 'update/:id', component: PatientUpdateComponent },
  //{ path: 'delete/:id', component: PatientDeleteComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(patientRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PatientRoutingModule { }
