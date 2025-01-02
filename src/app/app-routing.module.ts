import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from './common/service/authentication.guard';
import { authorizationGuard } from './common/service/authorization.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate:[authenticationGuard, authorizationGuard],
    data:{
      roles:[ 'USER', 'ADMIN', 'USER_MAIL']
    }
  
  },

 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
