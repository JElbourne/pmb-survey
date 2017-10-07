import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  questions: Array<any>;
  questionIndex: number;
  questionObject: any;

  constructor(private _dataService: DataService) {
    this._dataService.getQuestions()
      .subscribe((res) => {
        this.questions = res;
        this.activateQuestion(0);
      });
  }

  activateQuestion(num) {
    this.questionIndex = num;
    this.questionObject = this.questions[this.questionIndex];
  }
}
