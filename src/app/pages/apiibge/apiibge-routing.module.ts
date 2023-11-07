import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiibgeComponent } from './apiibge.component';
import { ApiibgeResolver } from './apiibge.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ApiibgeComponent,
    resolve: { apiibge: ApiibgeResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiibgeRoutingModule {}
