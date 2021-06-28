import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorySetupPage } from './category-setup.page';

const routes: Routes = [
  {
    path: '',
    component: CategorySetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorySetupPageRoutingModule {}
