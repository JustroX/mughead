import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHTMLPipe } from './safe-html.pipe';

@NgModule({
  declarations: [SafeHTMLPipe],
  imports: [CommonModule],
  exports: [SafeHTMLPipe],
})
export class PipesModule {}
