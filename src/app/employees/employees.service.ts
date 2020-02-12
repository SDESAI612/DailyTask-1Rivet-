import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

 private id: number =null;  
 private apiUrl ="http://localhost:3000/employeeData";
 apibaseUrl: "http://localhost:3000/employeeData"

  constructor(private http: HttpClient) { }


  /**
   * This is used for getting data
   */
   public GetDetails(): Observable<Employee[]>
    {   
      debugger
      return this.http.get<Employee[]>(`http://localhost:3000/employeeData`);
    } 

    /**
     * This will delete the record of a particular employee
     * @param id This will take employee id as argument 
     */
    public DeleteDetails(id:number)
    {
        debugger;
        this.id = id;
        return this.http.delete(this.apiUrl+'/'+this.id);
    }
    
    /**
     * This will the send the form group to json file
     * @param emp This will take the form group 
     */
    public postDetails(emp)
    {
      return this.http.post(this.apiUrl,emp)
    }
}
