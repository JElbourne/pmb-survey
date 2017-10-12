import { SurveyService } from './../survey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  constructor(private _surveyService: SurveyService) { }

  onStartClicked() {
    this._surveyService.stage.emit('questions');
  };


}
