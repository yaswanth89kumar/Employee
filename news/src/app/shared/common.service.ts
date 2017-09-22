import { Injectable } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { NgModule } from '@angular/core';

@Injectable()
@NgModule({
    imports: [CoolLocalStorage]
})
export class CommonService {
    localStorage: CoolLocalStorage;
  constructor (
    localStorage: CoolLocalStorage
  ) {
        this.localStorage = localStorage;
    }

  getUser() {
    return this.localStorage.getObject('authinfo');
  }
    logout() {
        return this.localStorage.removeItem('authinfo');
    }

}