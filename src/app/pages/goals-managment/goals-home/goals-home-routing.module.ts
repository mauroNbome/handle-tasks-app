import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsHomePage } from './goals-home.page';

const routes: Routes = [
  {
    path: '',
    component: GoalsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalsHomePageRoutingModule {}
