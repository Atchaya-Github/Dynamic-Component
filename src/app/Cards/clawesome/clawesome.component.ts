import { Component, Input } from '@angular/core';
import { MessageData } from 'src/app/message';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-clawesome',
  templateUrl: './clawesome.component.html',
  styleUrls: ['./clawesome.component.css']
})
export class ClawesomeComponent implements DynamicComponent{
  @Input() data!: MessageData;  
}
