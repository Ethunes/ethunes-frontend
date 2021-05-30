import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsComponent } from './listings.component';
import { ListingsRoutingModule, } from './listings-routing.module'



@NgModule({
  declarations: [
    ListingsComponent
  ],
  imports: [
    CommonModule,
    ListingsRoutingModule,
  ]
})
export class ListingsModule { }
