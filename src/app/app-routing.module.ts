import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { OneuserComponent } from './user/oneuser/oneuser.component';
import { AdminComponent } from './admin/admin.component';

import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  {path: ':id', component: OneuserComponent}
 ];

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:"", redirectTo:'home',pathMatch: 'full'},
  {path: 'useraccounts', component: UserComponent,
    children: userRoutes
  },
  {path: 'admin', component: AdminComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
