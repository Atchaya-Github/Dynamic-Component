import { Component } from '@angular/core';
import { MessageItem } from './message';
import { DetailsService } from './details.service';
import { formatNumber } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'name';
  public messages: MessageItem[] = [];
  constructor(private _details:DetailsService){}
  ngOnInit(){
   this.fn(2)
  } 
  fn(d:number){
    this.messages = this._details.getMessages(d);
  }
} 