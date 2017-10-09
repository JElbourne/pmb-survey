import { SurveyService } from './survey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  title = 'I+Q Cultural Assessment';
  surveyResults: number[] = null;

  constructor(private _surveyService: SurveyService) {}

  ngOnInit() {
    this._surveyService.questionsFinished
      .subscribe(
        (result: number[]) => {
          this.surveyResults = result;
        }
      );
  }
}
