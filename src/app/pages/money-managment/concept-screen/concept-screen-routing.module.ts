import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptScreenPage } from './concept-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ConceptScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConceptScreenPageRoutingModule {}
