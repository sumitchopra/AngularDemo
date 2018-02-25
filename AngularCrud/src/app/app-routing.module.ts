import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import { PagenotfoundComponentComponent } from './pagenotfound-component.component';

const appRoutes : Routes = [
  {path:'list',component:ListEmployeesComponent},   
  {path:'create',component:CreateEmployeesComponent},   
  {path:'',redirectTo : '/list', pathMatch:'full'},
  {path:'**',component:PagenotfoundComponentComponent},      
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
