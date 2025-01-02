import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

export const authenticationGuard: CanActivateFn = (_route, _state):boolean => {
  const authenticationService = inject(AuthenticationService)
  console.log(authenticationService.isAuthenticated())
  if (!authenticationService.isAuthenticated()) {
    console.log("OK")
  authenticationService.redirectTo('login');
  
    return false;
  }
return true;
};

