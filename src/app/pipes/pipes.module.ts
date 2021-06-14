import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorizeBalancePipe } from './colorize-balance.pipe';

@NgModule({
  declarations: [ColorizeBalancePipe],
  imports: [CommonModule],
  exports: [ColorizeBalancePipe],
})
export class PipesModule {}
