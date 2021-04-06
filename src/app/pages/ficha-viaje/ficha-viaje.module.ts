import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaViajePageRoutingModule } from './ficha-viaje-routing.module';

import { FichaViajePage } from './ficha-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaViajePageRoutingModule
  ],
  declarations: [FichaViajePage]
})
export class FichaViajePageModule {}
