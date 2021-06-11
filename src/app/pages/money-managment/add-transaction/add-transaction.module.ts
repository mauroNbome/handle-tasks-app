import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTransactionPageRoutingModule } from './add-transaction-routing.module';

import { AddTransactionPage } from './add-transaction.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTransactionPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AddTransactionPage],
})
export class AddTransactionPageModule {}