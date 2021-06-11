import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { KeyboardComponent } from './keyboard/keyboard.component';

@NgModule({
  declarations: [HeaderComponent, KeyboardComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, KeyboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
