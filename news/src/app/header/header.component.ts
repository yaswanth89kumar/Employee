import { Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { CommonService } from '../shared/common.service';
import { SigninService } from '../signin/signin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private auth = false;
  constructor(private signinservice: SigninService, localStorage: CoolLocalStorage, private commonService: CommonService, router: Router) { }

  ngOnInit() {
      var authinfo: any = this.commonService.getUser();
      if(authinfo!=null){ 
        this.auth = true;
      }
  }

}
