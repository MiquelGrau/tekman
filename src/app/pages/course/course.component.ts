import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import {selectCourse, selectLoading} from '../../state/selectors/course.selectors';
import { CourseModel } from '../../core/models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  loading$: Observable<boolean> = new Observable<boolean>();
  course$: Observable<CourseModel> = new Observable<CourseModel>();

  constructor (
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.course$ = this.store.select(selectCourse);
  }

  goToQuarter(id: string): void {
    this.router.navigate(['/quarter/', id]);
  }

  goToSession(id: string): void {
    this.router.navigate(['/get-ready/', id]);
  }

}
