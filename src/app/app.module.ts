import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { OneuserComponent } from './user/oneuser/oneuser.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { RouterModule } from '@angular/router';
import { HospitaldivComponent } from './hospitaldiv/hospitaldiv.component';
import { OnepatientComponent } from './patient/onepatient/onepatient.component';
import { OnedivComponent } from './hospitaldiv/onediv/onediv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    OneuserComponent,
    AdminComponent,
    PatientComponent,
    HospitaldivComponent,
    OnepatientComponent,
    OnedivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
