import { Injectable } from '@angular/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { SplashScreenPlugin } from '@capacitor/splash-screen';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkServiceService {
 
 
  // BehaviorSubject to hold the current network status
  //private networkStatusSubject = new BehaviorSubject<{ connected: boolean, connectionType: string }>();
  // public networkStatus$ = this.networkStatusSubject.asObservable();  // Observable for components to subscribe to
  private networkStatus: ConnectionStatus | undefined;
  constructor() {
   
  }

  async checkInternetConnection(): Promise<Boolean>{
    
    if (Network) {
      this.networkStatus = await Network.getStatus();
      console.log('Initial Network Status:', this.networkStatus);
      Network.addListener('networkStatusChange', (status) => {
        this.networkStatus = status
        console.log('Network Status Changed:', status);
      });
      return true
    } else {
     
      return false
    }
  }

}
