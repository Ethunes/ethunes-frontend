import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreateComponent } from './create.component'

const routes: Routes = [{
  path: '',
  component: CreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoutingModule {}
