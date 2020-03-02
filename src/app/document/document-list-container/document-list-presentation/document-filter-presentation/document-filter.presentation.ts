import { Component, ChangeDetectionStrategy } from '@angular/core';
// ---------------------------------- //
import { DocumentFilterPresenter } from '../document-filter-presenter/document-filter.presenter';


@Component({
  selector: 'cmp-document-filter-ui',
  templateUrl: './document-filter.presentation.html',
  styleUrls: ['./document-filter.presentation.scss'],
  viewProviders: [DocumentFilterPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentFilterPresentation  {
  constructor() {}
}
