import { Component, OnInit, Input } from '@angular/core';
import { ResultService } from './result.service';
import { SurveyService } from './../survey.service';

@Component({
  selector: 'app-survey-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  results: Array<any>;
  resultDescription: string;
  resultTitle: string;

  @Input() surveyResults: number[];

  constructor(
    private _resultService: ResultService,
    private _surveyService: SurveyService) {}

  ngOnInit(): void {
    this._resultService.getResults()
    .subscribe((res) => {
      this.results = res;
      this.determineResult();
    });
  }

  private determineResult() {
    const resultScore = this.surveyResults[0];
    if (resultScore < 20) {
      this.resultDescription = this.results[0].description;
      this.resultTitle = this.results[0].title;
    } else if (resultScore >= 20 && resultScore < 40) {
      this.resultDescription = this.results[1].description;
      this.resultTitle = this.results[1].title;
    } else if (resultScore >= 40 && resultScore < 60) {
      this.resultDescription = this.results[2].description;
      this.resultTitle = this.results[2].title;
    } else if (resultScore >= 60) {
      this.resultDescription = this.results[3].description;
      this.resultTitle = this.results[3].title;
    }
  }

  onStartOver() {
    this._surveyService.stage.emit('start');
  }
}
