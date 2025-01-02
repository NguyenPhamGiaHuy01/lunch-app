import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { ELookup } from 'src/app/common/enum/ELookup';
import { AuthenticationService } from 'src/app/common/service/authentication.service';


import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  signinForm!: FormGroup;
  user:any = null;
  validUserName: boolean = true
  validPass: boolean = true
constructor( private formBuilder: FormBuilder,  private userService: AuthenticationService, private router: Router) {
}

  async signIn(){
    (await this.userService.googleSignIn()).subscribe({
      next:(value)=> {
        console.log(value)

        localStorage.setItem(ELookup.TOKEN_NAME,value.token)
        localStorage.setItem(ELookup.REFRESH_TOKEN_NAME,value.refreshToken)
        
        this.router.navigate(['tabs'])
      },
      error:(err) =>{

        console.log(err)
      },
    })
  }

  // async refresh(){
  //   const authCode = await GoogleAuth.refresh();
  //   console.log('refresh: ', authCode)
  // }

  // async signOut(){
  //   await GoogleAuth.signOut();
  //   this.user = null
  // }
  passsChage($event: any) {
    this.validPass=$event.target?.value
  }
  userNameChage($event: any) {
      this.validUserName=$event.target?.value
  }
  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  
  async onSubmit() {
    const password: string = this.signinForm.get('password')?.value;
    const id: string = this.signinForm.get('username')?.value;
    if (id==null && password==null) {
      this.validUserName = false
      this.validPass = false
    } else if(id!=null && password== null)
      {
        this.validPass = false
    }
    else if(id==null && password!=null){
      this.validUserName = false
    }
    else{
      
      (await this.userService.login(id, password)).subscribe({
      next:(value)=>{
        console.log(value)
        localStorage.setItem(ELookup.TOKEN_NAME,value.token)
        localStorage.setItem(ELookup.REFRESH_TOKEN_NAME,value.refreshToken)
        
        this.router.navigate(['tabs'])
      },
      error:(err) =>{

        console.log(err)
      },

    })
    }    
    
  }
}
