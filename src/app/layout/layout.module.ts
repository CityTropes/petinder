import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {AppRoutingModule} from "../app-routing.module";





@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent

  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,       //required for each module (that is not root)
    AppRoutingModule
  ]
})
export class LayoutModule { }
