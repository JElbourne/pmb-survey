import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResultService {

  result: any;

  constructor (private _http: Http) { }

  getResults() {
    return this._http.get('/api/results')
      .map(result => this.result = result.json().data);
  }

}