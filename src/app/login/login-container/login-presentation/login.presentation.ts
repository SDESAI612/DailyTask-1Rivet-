import { Component, ChangeDetectionStrategy } from '@angular/core';
// ---------------------------------- //
import { LoginPresenter } from '../login-presenter/login.presenter';


@Component({
  selector: 'cmp-login-ui',
  templateUrl: './login.presentation.html',
  styleUrls: ['./login.presentation.scss'],
  viewProviders: [LoginPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPresentation {
  constructor() {}
}