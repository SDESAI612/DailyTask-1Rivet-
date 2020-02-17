import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../employee.model';


@Component({
  selector: 'app-employees-list-presentation',
  templateUrl: './employees-list-presentation.html',
  styleUrls: ['./employees-list-presentation.scss']
})
export class EmployeesListPresentation implements OnInit {

  public id:number;

  @Input() empObj;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() searchQuery = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit() {
    
  }

  /**
   * This function will delete the employee at particular id
   * @param id This take employee id as parameter
   */
  idDelete(id:number): void
  {
    this.deleteEvent.emit(id); 
  }
  
  /**
   * This function will search the record in the JSON file
   * @param searchText This will send the string to container for searching
   */
  searchData(searchText:string)
  {
  this.searchQuery.emit(searchText);
  }
}
