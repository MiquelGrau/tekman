import { ActionReducerMap } from '@ngrx/store';
import { CourseState } from '../core/states/course.state';
import { courseReducer } from './reducers/course.reducers';

export interface AppState {
  course: CourseState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  course: courseReducer
};
