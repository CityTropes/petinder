import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent
  ],
  imports: [
    BrowserModule,            //need this in your top level module
    AppRoutingModule,         //use the right one------------??
    LayoutModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }    //top level module
