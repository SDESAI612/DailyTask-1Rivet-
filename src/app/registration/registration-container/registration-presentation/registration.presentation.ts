import { Component, ChangeDetectionStrategy } from '@angular/core';
// ---------------------------------- //
import { RegistrationPresenter } from '../registration-presenter/registration.presenter';


@Component({
  selector: 'cmp-registration-ui',
  templateUrl: './registration.presentation.html',
  styleUrls: ['./registration.presentation.scss'],
  viewProviders: [RegistrationPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationPresentation  {
  constructor() {}
}