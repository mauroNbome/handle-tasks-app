import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoneyHomePageRoutingModule } from './money-home-routing.module';

import { MoneyHomePage } from './money-home.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneyHomePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MoneyHomePage],
})
export class MoneyHomePageModule {}
