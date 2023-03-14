import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import {take} from 'rxjs';
import { loadCourse } from 'src/app/state/actions/course.actions';
import {selectCourse} from '../../state/selectors/course.selectors';

@Injectable({
  providedIn: 'root',
})
export class CourseResolver implements Resolve<any> {
  constructor (
    private store: Store<any>
  ){}

  resolve(route: ActivatedRouteSnapshot): void {
    this.store.select(selectCourse)
      .pipe(take(1))
      .subscribe(course => {
        if (course.id === '') {
          this.store.dispatch(loadCourse());
        }
      })
  }
}
