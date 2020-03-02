import { Injectable } from '@angular/core';

import { Company } from './company.model'  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService {

  private apiUrl ="http://localhost:3000/company"; 

  constructor(private http:HttpClient) { }

  /**
   * This method get all the records from JSON
   */
  public getCompanies():Observable<Company[]>
  {
      return this.http.get<Company[]>(this.apiUrl);
  }
 
  /**
   * This method will delete the data from JSON file 
   * @param id This is the id that will be deleted
   */
  public deleteCompanies(id:number):Observable<Company>
  {

    return this.http.delete<Company>(this.apiUrl+'/'+id);
  }
}
