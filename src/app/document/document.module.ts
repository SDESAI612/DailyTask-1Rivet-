import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import {
  DocumentFormPresentation
} from './document-list-container/document-list-presentation/document-form-presentation/document-form.presentation';
import { DocumentListContainer } from './document-list-container/document-list.container';
import { DocumentListPresentation } from './document-list-container/document-list-presentation/document-list.presentation';
import {
  DocumentFilterPresentation
} from './document-list-container/document-list-presentation/document-filter-presentation/document-filter.presentation';


@NgModule({
  declarations: [
    DocumentFormPresentation,
    DocumentListContainer,
    DocumentListPresentation,
    DocumentFilterPresentation
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule
  ]
})
export class DocumentModule { }
