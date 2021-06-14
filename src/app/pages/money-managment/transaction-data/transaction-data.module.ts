import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionDataPageRoutingModule } from './transaction-data-routing.module';

import { TransactionDataPage } from './transaction-data.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionDataPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TransactionDataPage],
})
export class TransactionDataPageModule {}
