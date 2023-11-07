import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/apiibge/apiibge.module').then((m) => m.ApiibgeModule),
  },
  {
    path: 'jsonserver',
    loadChildren: () =>
      import('./pages/jsonserver/jsonserver.module').then((m) => m.JsonserverModule),
  },
  {
    path: 'websql',
    loadChildren: () =>
      import('./pages/websql/websql.module').then((m) => m.WebsqlModule),
  },
  {
    path: 'jsonplaceholder',
    loadChildren: () =>
      import('./pages/jsonplaceholder/jsonplaceholder.module').then((m) => m.JsonplaceholderModule),
  },

  // Not found
  {
    path: '**',
    loadChildren: () =>
      import('./pages/apiibge/apiibge.module').then((m) => m.ApiibgeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
