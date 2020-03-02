import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationContainer } from './notification-container/notification.container';


const routes: Routes = [
  {
    path: 'list',
    component: NotificationContainer
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
