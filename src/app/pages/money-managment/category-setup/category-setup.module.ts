import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorySetupPageRoutingModule } from './category-setup-routing.module';

import { CategorySetupPage } from './category-setup.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorySetupPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CategorySetupPage],
})
export class CategorySetupPageModule {}
