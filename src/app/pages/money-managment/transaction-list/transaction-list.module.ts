import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionListPageRoutingModule } from './transaction-list-routing.module';

import { TransactionListPage } from './transaction-list.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionListPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TransactionListPage],
})
export class TransactionListPageModule {}
