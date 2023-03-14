import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuarterRoutingModule} from './quarter-routing.module';
import {QuarterComponent} from './quarter.component';

@NgModule({
  declarations: [
    QuarterComponent
  ],
  imports: [
    QuarterRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class QuarterModule { }
