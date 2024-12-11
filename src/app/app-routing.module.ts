import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'menu-page',
    loadChildren: () => import('./Components/menu-page/menu-page.module').then( m => m.MenuPagePageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./Pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'order-page',
    loadChildren: () => import('./Pages/order-page/order-page.module').then( m => m.OrderPagePageModule)
  },
 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
