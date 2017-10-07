import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor (private _http: Http) { }

  getQuestions() {
    return this._http.get('/api/questions')
      .map(result => this.result = result.json().data);
  }

}
