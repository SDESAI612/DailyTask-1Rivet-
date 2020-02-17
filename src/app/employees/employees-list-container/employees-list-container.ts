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

  public empObj;

  constructor(private emp:EmployeesService) {
    this.GetDetails();
  }


  ngOnInit() {
  }

  /**
   * This function will get the data from JSON file 
   */
  GetDetails():void
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

  /**
   * This function will delete the record of a particular employee
   * @param id This will send the id of employee to the service 
   */
  idDelete(id:number): void
  {
    debugger
    this.emp.DeleteDetails(id).subscribe(()=>
    {
      this.GetDetails();
    });
  }

  /**
   * This function will send string to be send to JSON
   * @param searchData This is be the string entered for searching
   */
  searchData(searchData)
  {
    this.empObj = this.emp.searchData(searchData).subscribe(
     data=>{
       this.empObj = data;
     }
    );
  }

}
