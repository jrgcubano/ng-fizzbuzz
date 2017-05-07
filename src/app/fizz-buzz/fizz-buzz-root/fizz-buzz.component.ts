import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FizzBuzzService } from '../shared/index';

@Component({
  selector: 'mjs-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnInit {
  results: string[];

  constructor(
    private _fizzBuzzService: FizzBuzzService) { }

  ngOnInit() {

  }

  verify(numbers: number) {
    Observable.range(1, numbers)
      .flatMap(value => this._fizzBuzzService.verify(value))
      .toArray()
     	.do(x => console.log("range toArray: " + x))
      .subscribe(verified => this.results = verified);
  }
}
