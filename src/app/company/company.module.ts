import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http'
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyFormContainer } from './company-form-container/company-form.container';
import { CompanyFormPresentation } from './company-form-container/company-form-presentation/company-form.presentation';
import { CompanyListContainer } from './company-list-container/company-list.container';
import { CompanyListPresentation } from './company-list-container/company-list-presentation/company-list.presentation';
import { CompanyFilterPresentation } from './company-list-container/company-list-presentation/company-filter-presentation/company-filter.presentation';
import { ReactiveFormsModule } from '@angular/forms'
import { CompanyService } from './company.service';

@NgModule({
  declarations: [
    CompanyFormContainer,
    CompanyFormPresentation,
    CompanyListContainer,
    CompanyListPresentation,
    CompanyFilterPresentation,
    
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[CompanyService]
})
export class CompanyModule { }
