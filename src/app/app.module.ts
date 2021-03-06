import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import {HttpClientModule} from "@angular/common/http";
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    NameFilterPipe
  ],

  imports: [
    BrowserModule,            //need this in your top level module
    AppRoutingModule,         //use your own made
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }    //top level module
