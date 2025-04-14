import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

import { HttpService } from './services/http.service';
import { SessionService } from './services/session.service';
import { AppConfigService } from './services/common/app-config.service';
import { LoaderService } from './services/loader.service';

@Injectable()
export class BaseURLIntercepter implements HttpInterceptor {
  constructor(
    private appConfig: AppConfigService,
    public loaderService: LoaderService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    request = request.clone({
      url: request.url.includes('app-config.json')
        ? request.url
        : `${this.appConfig.getConfig().apiURL}${request.url}`,
    });
    return next.handle(request).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
      })
    );
  }
}

@Injectable()
export class AuthorizationIntercepter implements HttpInterceptor {
  constructor(private http: HttpService, private session: SessionService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.session.isDataAvailableInStorage('token') &&
      this.http.getDecryptedValue('token')
    ) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.http.getDecryptedValue('token')}`,
        },
      });
    }
    return next.handle(request);
  }
}
