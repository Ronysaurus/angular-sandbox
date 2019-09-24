import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs'; 
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

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
    MatExpansionModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
