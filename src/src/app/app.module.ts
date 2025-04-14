
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  AuthorizationIntercepter,
  BaseURLIntercepter,
} from './shared/BaseURL.intercepter';
import { AppConfigService } from './shared/services/common/app-config.service';
import { registerLocaleData } from '@angular/common';
import { default as localeEn } from '@angular/common/locales/en';
import { AuthGuard } from './shared/guard/auth.guard';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PermissionGuard } from './shared/guard/permission.guard';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { HasPermissionDir } from './shared/directive/haspermission.directive';

registerLocaleData(localeEn, 'en');
const appInitializerFn = (appConfigService: AppConfigService) => {
  return () => {
    return appConfigService.loadAppConfig();
  };
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [
    AppConfigService,
    AuthGuard,
    PermissionGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService],
    },
    { provide: HTTP_INTERCEPTORS, useClass: BaseURLIntercepter, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationIntercepter,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
