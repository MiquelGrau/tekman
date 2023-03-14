import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { CourseResolver } from './course.resolver';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    resolve: { course: CourseResolver },
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
