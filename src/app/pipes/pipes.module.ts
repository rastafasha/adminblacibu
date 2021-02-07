import { NgModule } from '@angular/core';
import {EscapeHtmlPipe} from './keep-html.pipe';
import {KeysPipe} from './keys.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    EscapeHtmlPipe,
    KeysPipe,
    FilterPipe
  ],
  imports: [],
  exports: [
    EscapeHtmlPipe,
    KeysPipe,
    FilterPipe
  ]
})
export class PipesModule { }
