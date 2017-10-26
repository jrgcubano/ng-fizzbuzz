import { Component, Input, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'mjs-fizz-buzz-items',
  templateUrl: './fizz-buzz-items.component.html',
  styleUrls: ['./fizz-buzz-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FizzBuzzItemsComponent implements OnInit, OnDestroy {

  private _data = new BehaviorSubject<string[]>([]);

  @Input()
  set data(value) {
    this._data.next(value);
  }

  get data() {
    return this._data.getValue();
  }

  items: string[];

  constructor() { }

  ngOnInit() {
    this._data.subscribe(x => {
      this.items = this.data;
    });
  }

  ngOnDestroy() {
    this._data.unsubscribe();
  }
}
