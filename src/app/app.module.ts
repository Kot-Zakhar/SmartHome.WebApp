import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// angular material
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule
} from '@angular/material';

// pages
import {
  NotfoundComponent,
  LogInComponent,
  SignUpComponent
} from './pages';

import { ApiInterceptorProvider } from './helpers/api.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // components
    NavigationComponent,
    // pages
    HomeComponent,
    DevicesComponent,
    NotfoundComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    NgbModule,

    // material modules
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],
  providers: [
    ApiInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
