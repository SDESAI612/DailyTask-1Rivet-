import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employees-list-presentation',
  templateUrl: './employees-list-presentation.html',
  styleUrls: ['./employees-list-presentation.scss']
})
export class EmployeesListPresentation implements OnInit {

  @Input() employees$: Observable<Employee[]>;

  constructor() { 
    console.log(this.employees$);
    
  }

  ngOnInit() {
  }

}
