import { Component, Input, OnDestroy, OnInit, Type,ViewChild} from '@angular/core';
import { ClawesomeComponent } from '../Cards/clawesome/clawesome.component';
import { DynamicDirective } from '../Cards/dynamic.directive';
import { DynamicComponent } from '../Cards/dynamic/dynamic.component';
import { PawesomeComponent } from '../Cards/pawesome/pawesome.component';
import { SmileyComponent } from '../Cards/smiley/smiley.component';
import { MessageItem, MessageType } from '../message';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit,OnDestroy{
  @ViewChild(DynamicDirective, { static: true }) private dynamicHost!: DynamicDirective;
  @Input() public messages: MessageItem[] = [];

  private interval: number | undefined;
  private currentIndex = 1;

  public ngOnInit(): void {
    this.loadComponent();
    this.rotateMessages();
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private componentTypeFactory(type: MessageType): Type<DynamicComponent> {
    let comp: Type<DynamicComponent>;
    if (type === 'Pawesome') {
      comp = PawesomeComponent;
    } else if (type === 'Clawesome') {
      comp = ClawesomeComponent;
    } else {
      comp = SmileyComponent;
    }
    return comp;
  }

  private loadComponent(): void {
    if (this.messages.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;
    const message = this.messages[this.currentIndex];

    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(this.componentTypeFactory(message.type));
    componentRef.instance.data = message.data;
  }

  private rotateMessages(): void {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 2000);
  }

}




