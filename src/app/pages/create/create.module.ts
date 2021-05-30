import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create-routing.module'
import { ComponentsModule } from '../../components/components.module'
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule } from '@nebular/theme'
import { NgxFileDropModule } from 'ngx-file-drop'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    CreateComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NbCheckboxModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    NgxFileDropModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
