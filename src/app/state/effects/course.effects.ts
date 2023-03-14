import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import {CourseService} from '../../services/course.service';

@Injectable()
export class CourseEffects {

  loadCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Course] Load Course'),
      switchMap(() => this.courseService.getCourse()
        .pipe(
          map(course => ({type: '[Course] Loaded Course Success', course: course})),
          catchError(() => EMPTY)
        )
      ),
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}
}
