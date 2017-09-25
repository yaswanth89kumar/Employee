import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { SigninService } from './signin/signin.service';
import { SignupService } from './signup/signup.service';
import { CommonService } from './shared/common.service';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    HomescreenComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SigninService, CoolLocalStorage, CommonService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
