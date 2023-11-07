import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsqlComponent } from './websql.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WebsqlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsqlRoutingModule {}
