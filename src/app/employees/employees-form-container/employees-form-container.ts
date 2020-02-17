import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service'
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StringifyOptions } from 'querystring';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-employees-form-container',
  templateUrl: './employees-form-container.html',
  styleUrls: ['./employees-form-container.scss']
})
export class EmployeesFormContainer implements OnInit {

  public id:number;
  public updateId;
  public employees:FormGroup;
  public employeesUpdated: FormGroup;
  public apiUrl:String = environment.apiUrl;
  public empData;
  public getData;

  constructor(private emp: EmployeesService, private routes: ActivatedRoute,private http:HttpClient) { }
 
  ngOnInit() {
    this.id = this.routes.snapshot.params['id'];
    if(this.id)
      {
        this.getEmployee(Number(this.id))

      }
  }

  /**
   * This function will send object to JSON file
   * @param employeeObject This function will take FormGroup Object as parameter
   */
  addData(employeeObject: FormGroup):void
  { 
    this.employees=employeeObject;
    this.emp.postDetails(this.employees.value).subscribe();
  }


  /**
   * This function is used for editing the data
   * @param employeeObject This is the employee Object that needs to be edited
   */
  editData(employeeObject: FormGroup):void
  { debugger;
    alert(JSON.stringify(employeeObject));
    
    this.emp.editDetails(employeeObject,this.id).subscribe();
  }

  /**
   * THis function will fetch record of a particular employee
   * @param empId This is the employee id that needs to be send
   */
  getEmployee(empId): void 
  {
    debugger;
    this.emp.getById(this.id).subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.getData=data;
      }
    );
    
  }
    
  
}
