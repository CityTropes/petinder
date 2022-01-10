import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,            //need this in your top level module
    AppRoutingModule,         //use the right one------------??
    LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }    //top level module
