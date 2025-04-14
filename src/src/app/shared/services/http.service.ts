import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EncryptionService } from './encryption.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private encryptService: EncryptionService,
    private session: SessionService,
    private router: Router
  ) {}

  timer: any;
  token: any;
  options: any;
  cryptoKey: string = 'emr$ecretK#y@282'; //Note: it will not accept more than 3 digit after @

  get(url: string, params?: any, response?: any): Observable<any> {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    if (params !== undefined) {
      this.options.params = params;
    }
    return this.http.get<any>(url, this.options).pipe();
  }

  getFile(url: string, params?: any, response?: any): Observable<any> {
    this.options = {
      headers: new HttpHeaders(),
    };
    if (params !== undefined) {
      this.options.params = params;
    }
    return this.http.get(url, { responseType: 'blob' });
  }

  post(url: string, body: any, response?: any) {
    this.options = { responseType: 'json' };
    if (response !== undefined) {
      this.options.observe = response;
      return this.http.post(url, body, this.options).pipe();
    }
    return this.http.post(url, body, this.options).pipe();
  }

  put(url: string, body: any, response?: any) {
    this.options = { responseType: 'json' };
    if (response !== undefined) {
      this.options.observe = response;
      return this.http.put(url, body, this.options).pipe();
    }
    return this.http.put(url, body, this.options).pipe();
  }

  setEncryptedToken(token: any, refreshToken = '') {
    this.setEncryptedValue('token', token);
    if (refreshToken != '') {
      this.setEncryptedValue('refreshToken', refreshToken);
    }
  }

  setEncryptedValue(key: any, value: any) {
    let encrypted = '';
    encrypted = this.encryptService.set(this.cryptoKey, value);
    this.session.setParameterDataToLocalStorage(key, encrypted);
  }

  getDecryptedValue(key: any) {
    let decrypted = this.encryptService.get(
      this.cryptoKey,
      this.session.getParameterDataFromLocalStorage(key)
    );
    return decrypted;
  }

  removeDataFromLocalStorage() {
    this.session.removeAuthFromSession();
  }
  setUserDetail(value: any) {
    this.session.setLoggedInUserDetailToSessionStorage(
      'loggedInUser',
      value.userId
    );
    this.session.setLoggedInUserDetailToSessionStorage(
      'isAdmin',
      value.isAdmin
    );
  }
}
