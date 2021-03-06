import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Array<any>;
  answers: Array<any>;
  questionsLength: number;
  questionIndex: number;
  questionText: string;
  answerObj: string = null;
  selectedAnswerValue: number = null;
  answerResultData: Array<number> = [];

  constructor(private _surveyService: SurveyService) {}

  ngOnInit(): void {
    this._surveyService.getQuestions()
      .subscribe((res) => {
        this.questions = res;
        this.questionsLength = this.questions.length;
        // Set to the first question (db stores an order number starting at 1)
        this.questionIndex = 1;
        this.activateQuestion();
      });
    // This next line was to text the results page easier
    // without going through all questions to get there.
    // this._surveyService.questionsFinished.emit([56, 3.4]);
  }

  private activateQuestion(): void {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].order === (this.questionIndex)) {
        this.questionText = this.questions[i].text;
        this.answers = this.questions[i].answers
          .map((answer) => [answer.text, answer.value]);
        break;
      }
    }
  }

  private calculatedAnswerValue(): Array<number> {
    if (this.answerResultData.length < 1) {
      return [0, 0];
    }
    let sum = 0;
    for ( let i = 0; i < this.answerResultData.length; i++ ) {
        sum += this.answerResultData[i];
    }
    return [sum, (sum / this.answerResultData.length)];
  }

  onAnswerChange(answerValue): void {
    this.selectedAnswerValue = answerValue;
  }

  onNextClicked(): void {
    if (this.questionIndex < (this.questions.length)) {
      this.answerResultData.push(this.selectedAnswerValue);
      this.selectedAnswerValue = null;
      this.questionIndex++;
      this.activateQuestion();
    } else {
      this._surveyService.questionsFinished.emit(this.calculatedAnswerValue());
      this._surveyService.stage.emit('results');
    }
  }
}
