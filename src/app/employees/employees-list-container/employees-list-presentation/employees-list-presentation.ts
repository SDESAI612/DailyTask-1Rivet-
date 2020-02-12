import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../employee.model';


@Component({
  selector: 'app-employees-list-presentation',
  templateUrl: './employees-list-presentation.html',
  styleUrls: ['./employees-list-presentation.scss']
})
export class EmployeesListPresentation implements OnInit {

  id;number;
  // @Input() employees$ : Observable<Employee[]>;
  @Input() empObj;
  @Output() deleteEvent = new EventEmitter<number>();
  constructor() { 
    // console.log(this.employees$);
  }
  idDelete(id:number)
  {
    // debugger;
    this.deleteEvent.emit(id);
    
  }
  ngOnInit() {
  }

}
