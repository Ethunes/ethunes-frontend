import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'start',
      loadChildren: () => import('./start/start.module')
        .then(m => m.StartModule),
    },
    {
      path: 'listings',
      loadChildren: () => import('./listings/listings.module')
        .then(m => m.ListingsModule),
    },
    {
      path: 'songs',
      loadChildren: () => import('./songs/songs.module')
        .then(m => m.SongsModule),
    },
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module')
        .then(m => m.ProfileModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: 'create',
      loadChildren: () => import('./create/create.module')
        .then(m => m.CreateModule),
    },
    {
      path: '',
      redirectTo: '/start',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
