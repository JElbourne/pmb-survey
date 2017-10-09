import { Component, OnInit, Input } from '@angular/core';
import { ResultService } from './result.service';

@Component({
  selector: 'app-survey-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  results: Array<any>;
  resultDescription: string;

  @Input() surveyResults: number[];

  constructor(private _resultService: ResultService) {
    this._resultService.getResults()
    .subscribe((res) => {
      this.results = res;
      this.determineResult();
    });
  }

  determineResult() {
    const resultScore = this.surveyResults[0];
    if (resultScore > 0 && resultScore <= ((16 * 5) / 5)) {
      this.resultDescription = this.results[0].description;
    } else if (resultScore > ((16 * 5) / 5) && resultScore <= ((16 * 5) / 4)) {
      this.resultDescription = this.results[1].description;
    } else if (resultScore > ((16 * 5) / 4) && resultScore <= ((16 * 5) / 3)) {
      this.resultDescription = this.results[2].description;
    } else if (resultScore > ((16 * 5) / 3) && resultScore <= ((16 * 5) / 2)) {
      this.resultDescription = this.results[3].description;
    } else if (resultScore > ((16 * 5) / 2) && resultScore <= (16 * 5)) {
      this.resultDescription = this.results[4].description;
    }
  }
}
