import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I+Q Cultural Assessment';
  questions: Array<any>;
  answers: Array<any>;
  questionsLength: number;
  questionIndex: number;
  questionText: string;
  answerObj: string = null;
  selectedAnswerValue: number = null;
  answerResultData: Array<number> = [];

  constructor(private _dataService: DataService) {
    this._dataService.getQuestions()
      .subscribe((res) => {
        this.questions = res;
        this.questionsLength = this.questions.length;
        this.activateQuestion(0);
      });
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
