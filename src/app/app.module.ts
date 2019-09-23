import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CensoComponent } from './censo/censo.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    CensoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
