import { Injectable } from '@angular/core';
import { App } from '@capacitor/app';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {
  private deviceId = Device.getId()
  private deviceOSVersion = Device.getInfo()
  private appVersion = App.getInfo()
  private deviceName = Device.getInfo()
  constructor() {
   
  }
  

  // Generate headers map
  async getHeadersMap(): Promise<{ [key: string]: string }> {
    
    const headers = {
      'X-DEVICE-ID':  (await this.deviceId).identifier,
      'X-OS-TYPE': 'android',
     'X-OS-VERSION': (await this.deviceOSVersion).osVersion,
    // 'X-APP-VERSION': (await this.appVersion).version,
      // 'X-API-ID': 'API-ID-MATURE-PARTNER-STG',
      // 'X-API-KEY': 'API-KEY-MATURE-PARTNER-STG',
     // 'X-DEVICE-NAME': (await this.deviceName).name||"",
    };
    return headers;
  }
}
