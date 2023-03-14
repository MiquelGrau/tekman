import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/course',
    pathMatch: 'full'
  },
  {
    path: 'course',
    loadChildren: () => import('./pages/course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'quarter',
    loadChildren: () => import('./pages/quarter/quarter.module').then((m) => m.QuarterModule),
  },
  {
    path: 'get-ready',
    loadChildren: () => import('./pages/get-ready/get-ready.module').then((m) => m.GetReadyModule),
  },
  {
    path: '**',
    redirectTo: '/course',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
