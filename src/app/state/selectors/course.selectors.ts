import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import {CourseState} from '../../core/states/course.state';

export const selectCourseFeature = (state: AppState) => state.course;

export const selectCourse = createSelector(
  selectCourseFeature,
  (state: CourseState) => state.course
);

export const selectLoading = createSelector(
  selectCourseFeature,
  (state: CourseState) => state.loading
);
