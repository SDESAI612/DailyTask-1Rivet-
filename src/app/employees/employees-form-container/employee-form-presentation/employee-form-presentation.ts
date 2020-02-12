import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { EmployeesPresenterService } from '../employees-form-presenter/employees-form-presenter';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss']
})
export class EmployeeFormPresentation implements OnInit {

  employeeForm: FormGroup;
  @Output() addEvent = new EventEmitter<FormGroup>(); 
 
  constructor(private fb: FormBuilder, private empPresenter: EmployeesPresenterService) { }

    addData()
    {
      this.addEvent.emit(this.employeeForm);
    }

  ngOnInit() {
    this.employeeForm=this.empPresenter.employee;
  }

}
