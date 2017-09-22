import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: HomescreenComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'logout', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
