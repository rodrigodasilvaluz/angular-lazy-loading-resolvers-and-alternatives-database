import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonplaceholderRoutingModule } from './jsonplaceholder-routing.module';
import { JsonplaceholderComponent } from './jsonplaceholder.component';


@NgModule({
  declarations: [
    JsonplaceholderComponent
  ],
  imports: [
    CommonModule,
    JsonplaceholderRoutingModule
  ]
})
export class JsonplaceholderModule { }
