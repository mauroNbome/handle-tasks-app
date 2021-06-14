import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionDataPage } from './transaction-data.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionDataPageRoutingModule {}
