import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiibgeRoutingModule } from './apiibge-routing.module';
import { ApiibgeComponent } from './apiibge.component';


@NgModule({
  declarations: [
    ApiibgeComponent
  ],
  imports: [
    CommonModule,
    ApiibgeRoutingModule
  ]
})
export class ApiibgeModule { }
