import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './common/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private userService: AuthenticationService, private router: Router) {}
  
  
  ngOnInit(){
    if (this.userService.isAuthenticated()) {
      this.router.navigate(['/tabs']);  // Tự động điều hướng đến màn hình Home
    }
  }

  
}
