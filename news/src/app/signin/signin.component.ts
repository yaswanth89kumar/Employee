import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SigninService } from '../signin/signin.service';
import { CommonService } from '../shared/common.service';
import { NgModule } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Injectable()
@NgModule({
    imports: [CoolLocalStorage]
})
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
private auth = false;
private profile ="";
username: string = "";
password: string = "";
private router;
private error=[];
localStorage: CoolLocalStorage;
  constructor(
    private signinservice: SigninService,
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
      if(this.router.url == '/logout') {
         this.commonService.logout();
         this.auth = false;
      }
    }
    
  getUser(form: NgForm) {
    const value = form.value;
    this.signinservice.getUser(value)
        .subscribe(data => {
            if(!Object.keys(data.error).length) {
                this.localStorage.setObject('authinfo', {
                    userid: data.userlist[0].id,
                    username: data.userlist[0].username,
                });
                this.router.navigate(['profile']);
            }
            else {
                this.error = data.error;
            }
        });
    
    
  }


}
