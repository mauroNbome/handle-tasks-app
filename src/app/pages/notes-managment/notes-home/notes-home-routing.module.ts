import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesHomePage } from './notes-home.page';

const routes: Routes = [
  {
    path: '',
    component: NotesHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesHomePageRoutingModule {}
