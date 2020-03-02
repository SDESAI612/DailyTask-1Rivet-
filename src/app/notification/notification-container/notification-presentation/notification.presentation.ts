import { Component, ChangeDetectionStrategy } from '@angular/core';
// ---------------------------------- //
import { NotificationPresenter } from '../notification-presenter/notification.presenter';


@Component({
  selector: 'cmp-notification-ui',
  templateUrl: './notification.presentation.html',
  styleUrls: ['./notification.presentation.scss'],
  viewProviders: [NotificationPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationPresentation  {
  constructor() {}
}