import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesFormContainer } from './employees-form-container/employees-form-container';
import { EmployeesListContainer } from './employees-list-container/employees-list-container';
import {  EmployeeFormPresentation } from './employees-form-container/employee-form-presentation/employee-form-presentation';
import { EmployeesListPresentation } from './employees-list-container/employees-list-presentation/employees-list-presentation';


@NgModule({
  declarations: [ EmployeesFormContainer, EmployeeFormPresentation, EmployeesListContainer, EmployeesListPresentation],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  exports: [
    EmployeesFormContainer,
    EmployeesListPresentation
  ]
})
export class EmployeesModule { }
