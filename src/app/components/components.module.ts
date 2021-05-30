import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song/song.component';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [SongComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
  ],
  exports: [
    SongComponent,
  ]
})
export class ComponentsModule { }
