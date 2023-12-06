import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { OneuserComponent } from './user/oneuser/oneuser.component';
import { AdminComponent } from './admin/admin.component';
import { HospitaldivComponent } from './hospitaldiv/hospitaldiv.component';
import { PatientComponent } from './patient/patient.component';

import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  {path: ':id', component: OneuserComponent}
 ];

const patientRoutes: Routes = [
  {path: ':id', component: OneuserComponent}
 ];

const divRoutes: Routes = [
  {path: ':id', component: OneuserComponent}
 ];


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:"", redirectTo:'home',pathMatch: 'full'},
  {path: 'useraccounts', component: UserComponent, //view user
    children: userRoutes
  },
  {path: 'admin', component: AdminComponent}, //create user


  {path: 'patientform', component: PatientComponent},//create patient
  {path: 'patients', component: UserComponent,//view patient
    children: patientRoutes
  },


  {path: 'division', component: HospitaldivComponent, //view divs
    children: divRoutes
  },
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
