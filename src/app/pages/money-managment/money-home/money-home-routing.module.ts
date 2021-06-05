import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneyHomePage } from './money-home.page';

const routes: Routes = [
  {
    path: '',
    component: MoneyHomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyHomePageRoutingModule {}
