import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SigninService {
  private applicationid;
  private body;
  private headers;
  private hostname = "http://localhost:81/employee/";
  constructor (private http: Http) {
        this.applicationid = 'JAPCAP100025NTR';
    }

  getUser(auth) {
    this.body = "username="+auth.username+"&password="+auth.password+"&applicationid="+this.applicationid;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
     
    return this.http.post(this.hostname+'authenticate.php', this.body, {headers: this.headers})
    .map((res:Response) => res.json());
  }
  getUserdetails(userid) {
    this.body = "userid="+userid+"&applicationid="+this.applicationid;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
     
    return this.http.post(this.hostname+'getuserdetails.php', this.body, {headers: this.headers})
    .map((res:Response) => res.json());
  }

}