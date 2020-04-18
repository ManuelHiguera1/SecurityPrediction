import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportCarPageRoutingModule } from './report-car-routing.module';

import { ReportCarPage } from './report-car.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ReportCarPageRoutingModule
  ],
  declarations: [ReportCarPage]
})
export class ReportCarPageModule {}
