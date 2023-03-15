import { Component, Input } from '@angular/core';
import { QuarterModel } from '../../core/models/quarter.model';

@Component({
  selector: 'app-quarter-info',
  templateUrl: './quarter-info.component.html',
  styleUrls: ['./quarter-info.component.scss']
})
export class QuarterInfoComponent {
  @Input() quarter: QuarterModel = new QuarterModel();

  constructor() {}

  nPercent(): number {
    return 100 * this.quarter.nCompletedSessions / this.quarter.nTotalSessions;
  }

  nPercentInverted(): number {
    return 100 - 100 * this.quarter.nCompletedSessions / this.quarter.nTotalSessions;
  }
}
