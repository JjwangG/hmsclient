import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { OneuserComponent } from './user/oneuser/oneuser.component';
import { AdminComponent } from './admin/admin.component';

import { HospitaldivComponent } from './hospitaldiv/hospitaldiv.component';
import { AdminDivComponent } from './admin-div/admin-div.component';
import { OnedivComponent } from './hospitaldiv/onediv/onediv.component';

import { PatientComponent } from './patient/patient.component';
import { PatientadminComponent } from './patientadmin/patientadmin.component';
import { OnepatientComponent } from './patient/onepatient/onepatient.component';

import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  {path: ':id', component: OneuserComponent}
 ];

const patientRoutes: Routes = [
  {path: ':id', component: OnepatientComponent}
 ];

const divRoutes: Routes = [
  {path: ':id', component: OnedivComponent}
 ];


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:"", redirectTo:'home',pathMatch: 'full'},
  {path: 'useraccounts', component: UserComponent, //view user
    children: userRoutes
  },
  {path: 'admin', component: AdminComponent}, //create user


  {path: 'patientform', component: PatientadminComponent},//create patient
  {path: 'patients', component: PatientComponent,//view patient
    children: patientRoutes
  },


  {path: 'divisions', component: HospitaldivComponent, //view divs
    children: divRoutes
  },
  {path: 'divform', component: AdminDivComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
