import { Component, inject, OnInit } from '@angular/core';
import { SelectChangeEventDetail } from '@ionic/angular';
import { IonSelectCustomEvent } from '@ionic/core';
import { Commune, District, Province, Provinces } from 'src/app/Data/API/ApiResult';
import { ProvinceService } from 'src/app/Service/ProvinceService/province.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {
  private provincesService = inject(ProvinceService)
   provinceData: Provinces[] = [] 
    provinces: Province[] = []
    districts: District[]=[]
    communes: Commune[] = []
  
    selectedProvince: Province = {
      province_name:'',
      province_id:0
    }

    constructor() {
    
     
      
     
    }

    getDetailsProvinces(){
      let setProvinces = new Set();
      this.communes.splice(0, this.communes.length)
      this.districts.splice(0, this.districts.length)
      this.provinceData.forEach((res)=>{
        if(!setProvinces.has(res.province_id)){
          let cloneProvince: Province ={
            province_id: res.province_id,
            province_name: res.province_name
          }
          this.provinces.push(cloneProvince)
          setProvinces.add(res.province_id)
        }
      })
    }
  
    getDistrict(event:any){
      const province_id = event.target.value
      let checkSet = new Set()
      this.districts.splice(0,this.districts.length)
      this.provinceData.forEach((res)=>{
        if(res.province_id===province_id&&!checkSet.has(res.district_id)){
          let cloneDistrict: District = {
            district_id: res.district_id,
            district_name: res.district_name
          }
  
          this.districts.push(cloneDistrict)
          checkSet.add(res.district_id)
          console.log(province_id)
        }
      })
    }
  
    getCommune(event: any){
      const district_id = event.target.value
      let checkSet = new Set()
      this.communes.splice(0, this.communes.length)
      this.provinceData.forEach((res)=>{
        if (res.district_id===district_id&&!checkSet.has(res.commune_id)) {
          let cloneCommune: Commune = {
            commune_id: res.commune_id,
            commune_name: res.commune_name
          }
  
          this.communes.push(cloneCommune)
          checkSet.add(res.commune_id)
        }
      })
    }
 
  handleChange(e: { detail: { value: string; }; }) {
    console.log('ionChange fired with value: ' + e.detail.value);
  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }

  

  ngOnInit() {
     // Subscribe to the service to fetch provinces data
     this.provincesService.getProvinces().subscribe({
      next: (value) => {
        this.provinceData = value; // Assuming the response is an array of provinces
        this.getDetailsProvinces(); // Process the provinces
      },
      error: (err) => {
        console.error('Error fetching provinces:', err);
      },
    });
  }

}
