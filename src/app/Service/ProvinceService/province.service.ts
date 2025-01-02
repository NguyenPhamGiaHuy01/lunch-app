import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provinces, Province, District, Commune } from 'src/app/Data/API/ApiResult';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

 

  constructor(private http: HttpClient) { }
  private getProvincesApi: string = "http://localhost:8080/user/province"

  getProvinces(): Observable<Provinces[]>{
    return this.http.get<Provinces[]> (this.getProvincesApi)
  }

 
}
