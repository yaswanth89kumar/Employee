import { Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { CommonService } from '../shared/common.service';
import { ProjectService } from '../shared/projects.service';
import { SigninService } from '../signin/signin.service';
import { SignupService } from '../signup/signup.service';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  localStorage: CoolLocalStorage;
  username: string = "";
  firstname: string = "";
  lastname: string = "";
  emailid: string = "";
  password: string = "";
  lastupdated: string = "";
  private editstatus = 1;
private empid = "";
  private router;
    private error=[];
    private projects=[];
    private success=[];
    private auth = false;
  constructor(private signinservice: SigninService, localStorage: CoolLocalStorage, private commonService: CommonService, router: Router, private signupservice: SignupService, private projectService: ProjectService) { 
    this.localStorage = localStorage;
    this.router= router;
    this.auth = true;
  }

  ngOnInit() {
      var authinfo: any = this.commonService.getUser();
      if(authinfo!=null){
          this.empid = authinfo.userid;
          this.signinservice.getUserdetails(authinfo.userid)
            .subscribe(data => {
                this.username = data[0].username;
                this.firstname = data[0].firstname;
                this.lastname = data[0].lastname;
                this.emailid = data[0].email;
                this.editstatus = data[0].editstatus;
                this.lastupdated = data[0].lastupdated;
            });
          this.auth = true;
          this.getProjects();
      }
      else {
          this.auth = false;
          this.router.navigate(['signin']);
      }
  }
    
  personaldetailsedit(form: NgForm) {
      const value = form.value;
      this.signupservice.profileUpdate(value)
        .subscribe(data => {
            if(Object.keys(data.error).length) {
               this.error = data.error;
            }
            else if(Object.keys(data.success).length) {
               this.success = data.success;
              this.password = "";
            }
            else {
               this.router.navigate(['profile']); 
            }
        });
  }
  
  getProjects() {
      this.projectService.getProjects(this.empid)
        .subscribe(data => {
            if(Object.keys(data.error).length) {
               this.error = data.error;
            }
            else if(Object.keys(data.success).length) {
               this.success = data.success;
            }
            else {
               this.projects = data.result;
            }
        });
  }
    

}
