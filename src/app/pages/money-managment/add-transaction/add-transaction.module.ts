import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTransactionPageRoutingModule } from './add-transaction-routing.module';

import { AddTransactionPage } from './add-transaction.page';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTransactionPageRoutingModule,
    ComponentsModule,
    PipesModule,
  ],
  declarations: [AddTransactionPage],
})
export class AddTransactionPageModule {}
