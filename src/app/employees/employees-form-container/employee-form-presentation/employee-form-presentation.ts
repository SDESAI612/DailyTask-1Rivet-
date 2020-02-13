import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { EmployeesPresenterService } from '../employees-form-presenter/employees-form-presenter';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss'],
  providers:[EmployeesPresenterService]
})
export class EmployeeFormPresentation implements OnInit {

  employeeForm: FormGroup;
  @Output() addEvent = new EventEmitter<FormGroup>(); 
 
  constructor( private employeeFormPresenter: EmployeesPresenterService) { }

  ngOnInit() {
    
    this.employeeForm=this.employeeFormPresenter.buildEmployeeForm();
     console.log(this.employeeForm);
     
   } 

  /**
   * This funtion will add data to JSON file
   */  
 public addData(): void
    {
      // this.employeeForm=this.employeeFormPresenter.buildEmployeeForm()
      this.addEvent.emit(this.employeeForm.value);
    
    }



}
