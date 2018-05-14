import {AppRoutingModule} from './app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {Error404Component} from './shared/components/error404/error404.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatInputModule,
  MatSortModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatOptionModule,
  MatSelectModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';
import {TaskCreatorComponent} from './task-creator/task-creator.component';
import {ProxiesComponent} from './proxies/proxies.component';
import {SettingsComponent} from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    Error404Component,
    DashboardComponent,
    TaskCreatorComponent,
    ProxiesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}