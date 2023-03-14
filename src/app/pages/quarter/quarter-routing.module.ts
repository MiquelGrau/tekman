import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuarterComponent} from './quarter.component';

const routes: Routes = [
  {
    path: '',
    component: QuarterComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuarterRoutingModule { }
