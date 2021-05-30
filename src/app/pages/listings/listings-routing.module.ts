import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListingsComponent } from './listings.component'

const routes: Routes = [{
  path: '',
  component: ListingsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingsRoutingModule {}
