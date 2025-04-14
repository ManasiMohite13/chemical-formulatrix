import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private router: Router) {}

  isDataAvailableInStorage(key: any) {
    return localStorage.getItem(key) != null;
  }
  setDataObjToLocalStorage(key: any, details: any) {
    let data = JSON.stringify(details);
    localStorage.setItem(key, data);
  }

  getDataObjFromLocalStorage(key: string) {
    let data = localStorage.getItem(key);
    return data;
  }
  setParameterDataToLocalStorage(key: any, value: any) {
    localStorage.setItem(key, value);
  }
  getParameterDataFromLocalStorage(key: any) {
    return localStorage.getItem(key);
  }
  removeFromLocalStorage(key: any) {
    localStorage.removeItem(key);
  }

  removeAuthFromSession() {
    this.removeFromLocalStorage('user');
    this.removeFromLocalStorage('token');
    this.removeFromLocalStorage('refreshToken');
    this.router.navigate(['login']);
  }
  setLoggedInUserDetailToSessionStorage(key: any, value: any) {
    sessionStorage.setItem(key, value);
  }
  getLoggedInUserData(key: any) {
    return localStorage.getItem(key);
  }
}
