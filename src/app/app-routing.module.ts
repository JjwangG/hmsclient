import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { OneuserComponent } from './user/oneuser/oneuser.component';
import { AdminComponent } from './admin/admin.component';
import { DivisionComponent } from './division/division.component';
import { PatientComponent } from './patient/patient.component';

import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  {path: ':id', component: OneuserComponent}
 ];

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:"", redirectTo:'home',pathMatch: 'full'},
  {path: 'useraccounts', component: UserComponent, //view user
    children: childRoutes
  },
  {path: 'admin', component: AdminComponent}, //create user
  {path: 'patientform', component: PatientComponent},//create patient
  {path: 'patients', component: UserComponent,//view patient
    children: childRoutes
  },
  {path: 'division', component: DivisionComponent},//view div
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
