import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsqlRoutingModule } from './websql-routing.module';
import { WebsqlComponent } from './websql.component';


@NgModule({
  declarations: [
    WebsqlComponent
  ],
  imports: [
    CommonModule,
    WebsqlRoutingModule
  ]
})
export class WebsqlModule { }
