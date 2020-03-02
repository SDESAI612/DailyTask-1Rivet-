import { Component, ChangeDetectionStrategy } from '@angular/core';
// ---------------------------------- //
import { DocumentFormPresenter } from '../document-form-presenter/document-form.presenter';


@Component({
  selector: 'cmp-document-form-ui',
  templateUrl: './document-form.presentation.html',
  styleUrls: ['./document-form.presentation.scss'],
  viewProviders: [DocumentFormPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentFormPresentation  {
  constructor() {}
}
