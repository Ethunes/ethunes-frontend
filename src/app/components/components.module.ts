import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song/song.component';
import { NbCardModule } from '@nebular/theme'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [SongComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbCardModule,
  ],
  exports: [
    SongComponent,
  ]
})
export class ComponentsModule { }
