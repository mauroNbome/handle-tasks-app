import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaViajePage } from './ficha-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: FichaViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaViajePageRoutingModule {}
