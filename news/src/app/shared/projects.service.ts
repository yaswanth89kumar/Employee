import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
  private applicationid;
  private body;
  private headers;
  private hostname = "http://localhost:81/employee/";
  constructor (private http: Http) {
        this.applicationid = 'JAPCAP100025NTR';
    }

  getProjects(empid) {
    this.body = "empid="+empid+"&applicationid="+this.applicationid;
    return this.callpostService('getprojects.php');
  }
  getAchievements(empid) {
    this.body = "empid="+empid+"&applicationid="+this.applicationid;
    return this.callpostService('getachievements.php');
  }
    
  callpostService(filename) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.hostname+filename, this.body, {headers: this.headers})
    .map((res:Response) => res.json());  
  }
  

}