import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneySettingsPage } from './money-settings.page';

const routes: Routes = [
  {
    path: '',
    component: MoneySettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneySettingsPageRoutingModule {}
