import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { HeaderModule } from './shared/components/header/header.module';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    SignupModule,
    HeaderModule,
    HomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
