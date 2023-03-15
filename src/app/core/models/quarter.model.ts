import {SessionModel} from './session.model';

export class QuarterModel {
  id: string;
  title: string;
  sessions: SessionModel[];
  nTotalSessions: number;
  nCompletedSessions: number;

  constructor() {
    this.id = '';
    this.title = '';
    this.sessions = [];
    this.nTotalSessions = 0;
    this.nCompletedSessions = 0;
  }
}
