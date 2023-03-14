import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetReadyComponent } from './get-ready.component';
import { GetReadyRoutingModule } from './get-ready-routing.module';

@NgModule({
  declarations: [
    GetReadyComponent
  ],
  imports: [
    GetReadyRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class GetReadyModule { }
