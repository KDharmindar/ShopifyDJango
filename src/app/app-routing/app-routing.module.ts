import { TaskCreatorComponent } from './../task-creator/task-creator.component';
import { Error404Component } from './../shared/components/error404/error404.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    data: {title: 'OneChat'}
  },
  {
    path: 'dashboard',
    component: DashboardComponent, 
    data: {title: 'Dashboard', breadcrumb: 'Dashboard'}
  },
  {
    path: 'task-creator',
    component: TaskCreatorComponent,
    data: {title: 'Task Creator', breadcrumb: 'Task Creator'}
  },
  {
    path: '404',
    component: Error404Component,
    data: {title: 'Error 404', breadcrumb: 'error 404'}
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
