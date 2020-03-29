import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'user', loadChildren: "./users/user.module#UserModule" },
  { path: 'patient', loadChildren: "./patients/patient.module#PatientModule" },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
