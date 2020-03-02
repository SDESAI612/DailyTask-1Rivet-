import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainer } from './login-container/login.container';
import { LoginPresentation } from './login-container/login-presentation/login.presentation';


@NgModule({
  declarations: [
    LoginContainer,
    LoginPresentation
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
