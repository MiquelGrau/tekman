import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CourseRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class CourseModule { }
