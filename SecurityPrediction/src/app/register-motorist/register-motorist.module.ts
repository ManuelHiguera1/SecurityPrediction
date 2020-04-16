import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterMotoristPageRoutingModule } from './register-motorist-routing.module';

import { RegisterMotoristPage } from './register-motorist.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RegisterMotoristPageRoutingModule
  ],
  declarations: [RegisterMotoristPage]
})

export class RegisterMotoristPageModule {}
