import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportCarPage } from './report-car.page';

const routes: Routes = [
  {
    path: '',
    component: ReportCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportCarPageRoutingModule {}
