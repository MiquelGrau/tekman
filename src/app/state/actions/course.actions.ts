import { createAction, props } from '@ngrx/store';
import {CourseModel} from '../../core/models/course.model';

export const loadCourse = createAction(
  '[Course] Load Course',
);

export const loadedCourse = createAction(
  '[Course] Loaded Course Success',
  props<{ course: CourseModel }>()
);
