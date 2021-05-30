import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module'
import { ComponentsModule } from '../../components/components.module'



@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    StartRoutingModule
  ]
})
export class StartModule { }
