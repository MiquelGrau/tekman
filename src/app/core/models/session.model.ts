
export class SessionModel {
  id: string;
  title: string;
  index: string;
  isWatched: boolean;

  constructor() {
    this.id = '';
    this.title = '';
    this.index = '';
    this.isWatched = false;
  }
}
