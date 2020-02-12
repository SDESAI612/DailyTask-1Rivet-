import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employees-list-container',
  templateUrl: './employees-list-container.html',
  styleUrls: ['./employees-list-container.scss']
})
export class EmployeesListContainer implements OnInit {

  empObj:any;
  employeeDetails$ = new Observable<Employee[]>();

  constructor(private emp:EmployeesService) {
    this.GetDetails();
  }


  ngOnInit() {

  }

  GetDetails()
  { 
    debugger
    this.emp.GetDetails().subscribe(
        data=> {
          this.empObj = data;
        }
    );
    // alert(JSON.stringify(this.employeeDetails$));
  //  console.log(JSON.stringify(this.employeeDetails$));
   
  }

  idDelete($event)
  {
    debugger
    this.emp.DeleteDetails($event).subscribe(()=>
    {
      this.GetDetails();
    });
  }

}
