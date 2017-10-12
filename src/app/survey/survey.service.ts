import { Injectable, EventEmitter } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SurveyService {

  questionsFinished = new EventEmitter<number[]>();
  result: any;
  stage = new EventEmitter<string>();

  constructor (private _http: Http) { }

  getQuestions() {
    return this._http.get('/api/questions')
      .map(result => this.result = result.json().data);
  }

}
