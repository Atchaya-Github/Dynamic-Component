import { Component, Input } from '@angular/core';
import { MessageData } from 'src/app/message';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-pawesome',
  templateUrl: './pawesome.component.html',
  styleUrls: ['./pawesome.component.css']
})
export class PawesomeComponent implements DynamicComponent{
  @Input() data!: MessageData; 
}
