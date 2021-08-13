import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorySetupIndividualAddPageRoutingModule } from './category-setup-individual-add-routing.module';

import { CategorySetupIndividualAddPage } from './category-setup-individual-add.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorySetupIndividualAddPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CategorySetupIndividualAddPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategorySetupIndividualAddPageModule {}
