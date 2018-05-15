import { CheckoutProfileComponent } from './../checkout-profile/checkout-profile.component';
import { GmailAccountsComponent } from './../gmail-accounts/gmail-accounts.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {Error404Component} from './../shared/components/error404/error404.component';
import {TaskCreatorComponent} from './../task-creator/task-creator.component';
import {DashboardComponent} from './../dashboard/dashboard.component';
import {SettingsComponent} from './../settings/settings.component';
import {ProxiesComponent} from './../proxies/proxies.component';

const appRoutes : Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    data: {
      title: 'Shopify'
    }
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      breadcrumb: 'Dashboard'
    }
  }, {
    path: 'task-creator',
    component: TaskCreatorComponent,
    data: {
      title: 'Task Creator',
      breadcrumb: 'Task Creator'
    }
  }, {
    path: 'checkout-profile',
    component: CheckoutProfileComponent,
    data: {
      title: 'Checkout Profile',
      breadcrumb: 'Checkout Profile'
    }
  }, {
    path: 'proxies',
    component: ProxiesComponent,
    data: {
      title: 'Proxies Component',
      breadcrumb: 'Proxies'
    }
  }, {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings Component',
      breadcrumb: 'Settings'
    }
  }, {
    path: 'gmail-accounts',
    component: GmailAccountsComponent,
    data: {
      title: 'Gmail Accounts Component',
      breadcrumb: 'Gmail Accounts'
    }
  }, {
    path: '404',
    component: Error404Component,
    data: {
      title: 'Error 404',
      breadcrumb: 'error 404'
    }
  }, {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}