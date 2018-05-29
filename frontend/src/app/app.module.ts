import { AppRoutingModule} from './app-routing/app-routing.module';
import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent} from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
  MatCardModule,
  MatListModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule
} from '@angular/material';

import { LoginComponent } from './login/login.component';
// import { HomeModule } from './home/home.module';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    // HomeModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}