import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  private URLApi: string = "http://localhost:8080/auth/login"
 
  async login(id:string, password:string): Promise<Observable<any>>{
    try {
      const response = this.http.post(this.URLApi,{id,password});
      return response;
    } catch (error) {
      throw error;
    }
  }
}
