import {CourseModel} from '../models/course.model';

export class CourseState {
  loading: boolean;
  course: CourseModel;

  constructor() {
    this.loading = false;
    this.course = new CourseModel();
  }
}
