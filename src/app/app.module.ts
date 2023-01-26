import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PawesomeComponent } from './Cards/pawesome/pawesome.component';
import { ClawesomeComponent } from './Cards/clawesome/clawesome.component';
import { SmileyComponent } from './Cards/smiley/smiley.component';
import {MatCardModule} from '@angular/material/card';
import { DynamicDirective } from './Cards/dynamic.directive';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    PawesomeComponent,
    ClawesomeComponent,
    SmileyComponent,
    DynamicDirective,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
