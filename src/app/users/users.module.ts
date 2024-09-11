import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { ManagementUserComponent } from './management-user/management-user.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    UserFormComponent,
    ManagementUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    UsersRoutingModule
  ] ,
  exports:[
    UserDashboardComponent,
    UserFormComponent
  ]
})
export class UsersModule { }
