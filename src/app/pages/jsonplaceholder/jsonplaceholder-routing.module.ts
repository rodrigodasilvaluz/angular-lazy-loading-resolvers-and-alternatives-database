import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonplaceholderComponent } from './jsonplaceholder.component';
import { JsonplaceholderResolver } from './jsonplaceholder.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JsonplaceholderComponent,
    resolve: { jsonplaceholder: JsonplaceholderResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonplaceholderRoutingModule {}
