import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'register-motorist',
    loadChildren: () => import('./register-motorist/register-motorist.module').then( m => m.RegisterMotoristPageModule)
  },
  {
    path: 'report-car',
    loadChildren: () => import('./report-car/report-car.module').then( m => m.ReportCarPageModule)
  },
  {
    path: 'car-list',
    loadChildren: () => import('./car-list/car-list.module').then( m => m.CarListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
