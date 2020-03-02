import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationContainer } from './registration-container/registration.container';
import { RegistrationPresentation } from './registration-container/registration-presentation/registration.presentation';


@NgModule({
  declarations: [
    RegistrationContainer,
    RegistrationPresentation
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
