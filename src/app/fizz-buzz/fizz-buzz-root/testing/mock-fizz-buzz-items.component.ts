import { Component, Input, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'mjs-fizz-buzz-items',
  template: `
    <ul>
      <li *ngFor="let item of items"></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MockFizzBuzzItemsComponent implements OnInit {

  private _data = new BehaviorSubject<string[]>([]);

  @Input()
  set data(value) {
    this._data.next(value);
  };

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
