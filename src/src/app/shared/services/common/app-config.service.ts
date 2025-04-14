import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'  
import packJson from '/package.json'

declare var window: any
@Injectable()
export class AppConfigService {
  private appConfig:any;

  constructor(private http: HttpClient) {}
  loadAppConfig() {
    return this.http
      .get('assets/config/app-config.json')
      .pipe(
        map((data: any) => {
          if (data.apmServiceConfig && data.apmServiceConfig.hasOwnProperty('serviceVersion')) {
            data.apmServiceConfig.serviceVersion = packJson.version
          }
          return data
        }),
      )
      .toPromise()
      .then(data => {
        this.appConfig = data
        window.config = data
      })
  }

  getConfig() {
    return this.appConfig
  }
  getKeys(obj:any) {
    return Object.keys(obj)
  }

  hasConfig(key:any) {
    return !!this.getConfig()[key]
  }
}
    