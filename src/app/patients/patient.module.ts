import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
//import { PatientDeleteComponent } from './patient-delete/patient-delete.component';

@NgModule({
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    PatientListComponent, 
    PatientDetailsComponent, 
    PatientCreateComponent, 
    PatientUpdateComponent, 
    //PatientDeleteComponent
  ]
})
export class PatientModule { }
