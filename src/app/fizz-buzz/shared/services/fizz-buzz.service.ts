import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IFizzBuzz, FizzBuzz } from '../models/fizz-buzz';

@Injectable()
export class FizzBuzzService {
  private _fizzBuzz: IFizzBuzz;

  constructor() {
    this._fizzBuzz = new FizzBuzz();
  }

  verify(value: number): Observable<string> {
    return Observable.of(
      this._fizzBuzz.verify(value));
  }
}
