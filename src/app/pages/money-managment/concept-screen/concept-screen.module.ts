import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConceptScreenPageRoutingModule } from './concept-screen-routing.module';

import { ConceptScreenPage } from './concept-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConceptScreenPageRoutingModule
  ],
  declarations: [ConceptScreenPage]
})
export class ConceptScreenPageModule {}
