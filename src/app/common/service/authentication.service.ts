import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ELookup } from '../enum/ELookup';
import { isPlatform, Platform } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API_URL = environment.API_URL
  isUserLoggedIn = false
  user:any = null;
  constructor(private http:HttpClient, private router: Router, private platform: Platform) { 
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize()
    }
    platform.ready().then(()=>{
      GoogleAuth.initialize()
    })
  }
  async googleSignIn(): Promise<Observable<any>> {
    try {
      this.user = await GoogleAuth.signIn();
      const { id, name } = this.user;
  
  
      if (this.user) {
        const response = this.http.post(`${this.API_URL}/auth/googleLogin`,{id:id, password: id+name, name: name});
        return response
      } else {
        throw new Error('User not found.');
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
      throw error;
    }
  }
  // async refresh(){
  //   const authCode = await GoogleAuth.refresh();
  //   console.log('refresh: ', authCode)
  // }

  // async signOut(){
  //   await GoogleAuth.signOut();
  //   this.user = null
  // }

  get token() {
    let token: any = localStorage.getItem(ELookup.TOKEN_NAME);
    return token; 
  }

  
  async loadArea(): Promise<Observable<any>>{
    try {
      const response = this.http.get(`http://res.cloudinary.com/twincloudinary/raw/upload/PMH/provinces.json`);
      return response;
    } catch (error) {
      throw error
    }
  } 

  async login(id:string, password:string): Promise<Observable<any>>{
      try {
        const response = this.http.post(`${this.API_URL}/auth/login`,{id,password});
        return response;
      } catch (error) {
        throw error;
      }
    }
    // && this.jwtHelper.isTokenExpired(this.token)
    // this.isUserLoggedIn = !this.jwtHelper.isTokenExpired(this.token);


    redirectTo(uri: string) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
    }
  
    isAuthenticated():boolean{
      if (this.token!=null) {
        let token: any = localStorage.getItem(ELookup.REFRESH_TOKEN_NAME)
        localStorage.setItem(ELookup.TOKEN_NAME, token)
        this.isUserLoggedIn=true
      }
      return this.isUserLoggedIn
    }


}
