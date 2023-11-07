import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonserverComponent } from './jsonserver.component';
import { JsonserverResolver } from './jsonserver.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JsonserverComponent,
    resolve: { jsonserver: JsonserverResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonserverRoutingModule {}
