import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesHomePageRoutingModule } from './notes-home-routing.module';

import { NotesHomePage } from './notes-home.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesHomePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [NotesHomePage],
})
export class NotesHomePageModule {}
