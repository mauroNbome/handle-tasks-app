import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseCategoryPageRoutingModule } from './choose-category-routing.module';

import { ChooseCategoryPage } from './choose-category.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseCategoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChooseCategoryPage]
})
export class ChooseCategoryPageModule {}
