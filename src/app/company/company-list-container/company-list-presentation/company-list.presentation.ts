import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
// ---------------------------------- //
import { Company } from '../../company.model';
import { CompanyListPresenter } from '../company-list-presenter/company-list.presenter';
import { Observable } from 'rxjs'

@Component({
  selector: 'cmp-company-list-ui',
  templateUrl: './company-list.presentation.html',
  styleUrls: ['./company-list.presentation.scss'],
  viewProviders: [CompanyListPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListPresentation  {
  
  
  @Input() public companyList$:Observable<Company[]>;
  @Output() deleteCompany = new EventEmitter<number>();

  delete(id:number):void
  { 
    debugger;
    this.deleteCompany.emit(id);    
  }

  constructor() {}
}
