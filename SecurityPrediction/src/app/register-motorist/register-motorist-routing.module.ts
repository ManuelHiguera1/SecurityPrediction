import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterMotoristPage } from './register-motorist.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterMotoristPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterMotoristPageRoutingModule {}
