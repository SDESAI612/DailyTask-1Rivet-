import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesFormContainer } from './employees-form-container/employees-form-container';
import { EmployeesListContainer } from './employees-list-container/employees-list-container';


const routes: Routes = [
  {
    path:'',
    component: EmployeesListContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
