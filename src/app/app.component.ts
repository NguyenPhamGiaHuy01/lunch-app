import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { NetworkServiceService } from './Config/Network/network-service.service';
import { ConnectionStatus, Network } from '@capacitor/network';
import { Subscription } from 'rxjs';
import { DeviceInfoService } from './Config/Devices/device-info.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private network: NetworkServiceService, private deviceInfo: DeviceInfoService) {}
  async ngOnInit() {
       try {
      // Show the splash screen during initialization
       SplashScreen.show()
         console.log(this.deviceInfo.getHeadersMap())
       if (await this.network.checkInternetConnection()) {
        await SplashScreen.hide();
       }  else {
        console.warn('Network plugin is not available');
       }
    } catch (error) {
      console.error('Error during initialization:', error);
    }
  }
  // networkStatus: ConnectionStatus | undefined;
  
  // constructor(private network: NetworkServiceService) {}

  // async ngOnInit() {
  //   try {
  //     // Show the splash screen during initialization
  //      SplashScreen.show();

  //     // Check if the Network plugin is available
  //     if (Network) {
  //       // Get the initial network status
  //       this.networkStatus = await Network.getStatus();
  //       console.log('Initial Network Status:', this.networkStatus);

        
  //       // Listen to network status changes
  //       Network.addListener('networkStatusChange', (status) => {
  //         this.networkStatus = status;
  //         console.log('Network Status Changed:', status);
  //       });
  //       // Hide the splash screen after fetching the status
  //       await SplashScreen.hide();

  //     } else {
  //       console.warn('Network plugin is not available');
  //     }
  //   } catch (error) {
  //     console.error('Error during initialization:', error);
  //   }
  // }

 

}
 // constructor() {}
  // ngOnInit() {
  //   this.showSplash();
  // }

  // async showSplash() {
  //   SplashScreen.show({
  //     showDuration: 2000, // Thời gian hiển thị splash screen có thể điều chỉnh
  //     autoHide: true
  //   });
  // }

  // isOnline: boolean = true;

  // constructor(private networkService: NetworkServiceService) {}

  // ngOnInit() {
  //   this.networkService.isOnline$.subscribe((status) => {
  //     this.isOnline = status;
  //     if (this.isOnline) {
  //       console.log('You are online');
  //       // Optionally, reload or refresh the data
  //     } else {
  //       console.log('You are offline');
  //     }
  //   });
  // }