import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service'
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees-form-container',
  templateUrl: './employees-form-container.html',
  styleUrls: ['./employees-form-container.scss']
})
export class EmployeesFormContainer implements OnInit {

  public id;
  public updateId;
  public employees:FormGroup;
  apiUrl="http://localhost:3000/employeeData"
  empData: Object;

  constructor(private emp: EmployeesService, private routes: ActivatedRoute,private http:HttpClient) { }
 
  ngOnInit() {
    this.id = this.routes.snapshot.params['id'];
    if(this.id)
      {
        this.getEmployee(this.id)

      }
  }

  /**
   * This function will send object to JSON file
   * @param employeeObject This function will take FormGroup Object as parameter
   */
  addData(employeeObject: FormGroup):void
  { 
    this.employees=employeeObject;
    this.emp.postDetails(this.employees).subscribe();
  }

  getEmployee(empId)
  {
    console.log(empId)
  }
    
  
}
