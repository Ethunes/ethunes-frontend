import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { SongsRoutingModule } from './songs-routing.module'
import { ComponentsModule } from '../../components/components.module'



@NgModule({
  declarations: [
    SongsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SongsRoutingModule
  ]
})
export class SongsModule { }
