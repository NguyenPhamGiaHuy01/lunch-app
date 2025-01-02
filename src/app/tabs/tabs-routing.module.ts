import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { authenticationGuard } from '../common/service/authentication.guard';
import { authorizationGuard } from '../common/service/authorization.guard';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
   
    children: [
      {
        path: 'home',
        loadChildren: () => import('../Pages/home-page/home-page.module').then(m => m.HomePagePageModule),
        canActivate:[authorizationGuard, authenticationGuard],
        data:{
          roles:['USER', 'USER_MAIL']
        },
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
        canActivate:[authorizationGuard, authenticationGuard],
        data:{
          roles:['ADMIN']
        },
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule),
        canActivate:[authorizationGuard, authenticationGuard],
        data:{
          roles:['USER', 'USER_MAIL']
        },
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
     
    ]
   
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
