import { Component, Input } from '@angular/core';
import { MessageData } from 'src/app/message';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.css']
})
export class SmileyComponent implements DynamicComponent{
  @Input() public data!: MessageData;  
}
