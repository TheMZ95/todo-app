import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntryDisplayComponent} from './entry-display/entry-display.component';


@NgModule({
  declarations: [
    EntryDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EntryDisplayComponent
  ]
})
export class TodoListModule {
}
