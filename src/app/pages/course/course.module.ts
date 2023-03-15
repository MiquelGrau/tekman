import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';
import {CardBoxComponent} from '../../components/card-box/card-box.component';
import {MatButtonModule} from '@angular/material/button';
import {QuarterInfoComponent} from '../../components/quarter-info/quarter-info.component';

@NgModule({
  declarations: [
    CourseComponent,
    CardBoxComponent,
    QuarterInfoComponent
  ],
  imports: [
    CourseRoutingModule,
    CommonModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [],
  bootstrap: []
})
export class CourseModule { }
