import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationContainer } from './notification-container/notification.container';
import { NotificationPresentation } from './notification-container/notification-presentation/notification.presentation';


@NgModule({
  declarations: [
    NotificationContainer,
    NotificationPresentation
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
