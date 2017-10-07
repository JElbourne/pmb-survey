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

  constructor(private _dataService: DataService) {
    this._dataService.getQuestions()
      .subscribe(res => this.questions = res);
  }
}
