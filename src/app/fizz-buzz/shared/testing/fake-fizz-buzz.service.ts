import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { IFizzBuzz, FizzBuzz } from '../models/fizz-buzz';

export class FakeFizzBuzzService {
  constructor() {}

  verify(value: number): Observable<string> {
    return Observable.of('1').do(x => console.log('fake of: ' + x));
  }
}
