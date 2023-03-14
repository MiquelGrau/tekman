import { createReducer, on } from '@ngrx/store';
import {
  loadCourse,
  loadedCourse,
} from '../actions/course.actions';
import { CourseState } from '../../core/states/course.state';

export const initialState: CourseState = new CourseState();

export const courseReducer = createReducer(
  initialState,
  on(loadCourse, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedCourse, (state, { course }) => {
    return { ...state, loading: false, course: course };
  }),
);
