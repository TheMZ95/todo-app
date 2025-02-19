import {Component} from '@angular/core';
import {TodoEntry} from '../todo-entry';

@Component({
  selector: 'app-entry-display',
  standalone: false,
  templateUrl: './entry-display.component.html',
  styleUrl: './entry-display.component.scss'
})
export class EntryDisplayComponent {


  protected content: TodoEntry = {
    title: 'Finish this',
    content: 'I need to finish the display component!'
  };


}
