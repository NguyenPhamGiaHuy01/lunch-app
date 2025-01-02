import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { jwtDecode } from 'jwt-decode';

export const authorizationGuard: CanActivateFn = (route, state):boolean => {
  const authenticationService = inject(AuthenticationService)
  const expectedRoles = route.data['roles']
  let tokenPayload: any = jwtDecode(authenticationService.token)
  let access = "null"
  console.log(tokenPayload)
  console.log(expectedRoles)
  if (authenticationService.isAuthenticated()) { 
    if (expectedRoles.includes(tokenPayload.roles)) {
      access = "true";
    }
  }
  if (access === "true") {
    return true;
  }
  return false;
};






