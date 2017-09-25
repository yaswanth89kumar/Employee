import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup/signup.service';
import { CommonService } from '../shared/common.service';
import { NgModule } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    
 private router;
 private auth = false;
 private error=[];
 localStorage: CoolLocalStorage;

  constructor(
    private signupservice: SignupService,
    localStorage: CoolLocalStorage, 
    router: Router,
    private commonService: CommonService
    ) {
    this.localStorage = localStorage;
    this.router= router;
  }

  ngOnInit() {
      var authinfo: any = this.commonService.getUser();
      if(authinfo){
        this.router.navigate(['profile']);
        this.auth = true;
      }
  }
  register(form: NgForm) {
      const value = form.value;
      this.signupservice.register(value)
        .subscribe(data => {
            if(!Object.keys(data.error).length) {
                this.router.navigate(['signin']);
            }
            else {
                this.error = data.error;
            }
          console.log(data);
        });
  }

}
