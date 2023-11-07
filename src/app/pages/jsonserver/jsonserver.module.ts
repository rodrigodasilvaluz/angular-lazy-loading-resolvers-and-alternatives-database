import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonserverRoutingModule } from './jsonserver-routing.module';
import { JsonserverComponent } from './jsonserver.component';


@NgModule({
  declarations: [
    JsonserverComponent
  ],
  imports: [
    CommonModule,
    JsonserverRoutingModule
  ]
})
export class JsonserverModule { }
