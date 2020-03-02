import { Component, ChangeDetectionStrategy } from '@angular/core';
// ---------------------------------- //
import { CompanyFormPresenter } from '../company-form-presenter/company-form.presenter';


@Component({
  selector: 'cmp-company-form-ui',
  templateUrl: './company-form.presentation.html',
  styleUrls: ['./company-form.presentation.scss'],
  viewProviders: [CompanyFormPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyFormPresentation  {
  constructor() {}
}
