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

  employeeDetails$: Observable<Employee[]>;

  constructor(private emp:EmployeesService) {
    this.GetDetails();
  }


  ngOnInit() {
  }

  GetDetails()
  { 
   this.employeeDetails$ = this.emp.GetDetails();
   console.log(this.employeeDetails$);
   
  }

}
