import {SessionModel} from './session.model';
import {QuarterModel} from './quarter.model';

export class CourseModel {
  id: string;
  quarters: QuarterModel[];
  currentSession: SessionModel;

  constructor() {
    this.id = '';
    this.quarters = [];
    this.currentSession = new SessionModel();
  }
}
