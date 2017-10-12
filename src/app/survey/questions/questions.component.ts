import { Component } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  questions: Array<any>;
  answers: Array<any>;
  questionsLength: number;
  questionIndex: number;
  questionText: string;
  answerObj: string = null;
  selectedAnswerValue: number = null;
  answerResultData: Array<number> = [];

  constructor(private _surveyService: SurveyService) {
    this._surveyService.getQuestions()
      .subscribe((res) => {
        this.questions = res;
        this.questionsLength = this.questions.length;
        this.activateQuestion(0);
      });
    // This next line was to text the results page easier
    // without going through all questions to get there.
    //this._surveyService.questionsFinished.emit([56, 3.4]);
  }

  activateQuestion(num) {
    this.questionIndex = num;
    this.questionText = this.questions[this.questionIndex].text;
    this.answers = this.questions[this.questionIndex].answers
      .map((answer) => [answer.text, answer.value]);
  }

  onAnswerChange(answerValue) {
    this.selectedAnswerValue = answerValue;
  }

  onNextClicked() {
    if (this.questionIndex < (this.questions.length - 1)) {
      this.answerResultData.push(this.selectedAnswerValue);
      this.selectedAnswerValue = null;
      this.questionIndex++;
      this.activateQuestion(this.questionIndex);
    } else {
      this._surveyService.questionsFinished.emit(this.calculatedAnswerValue());
      this._surveyService.stage.emit('results');
    }
  }

  calculatedAnswerValue() {
    if (this.answerResultData.length < 1) {
      return [0, 0];
    }
    let sum = 0;
    for ( let i = 0; i < this.answerResultData.length; i++ ) {
        sum += this.answerResultData[i];
    }
    return [sum, (sum / this.answerResultData.length)];
  }

}
