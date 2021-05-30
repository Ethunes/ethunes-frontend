import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module'
import { ComponentsModule } from '../../components/components.module'



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
