import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoneySettingsPageRoutingModule } from './money-settings-routing.module';

import { MoneySettingsPage } from './money-settings.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneySettingsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MoneySettingsPage],
})
export class MoneySettingsPageModule {}
