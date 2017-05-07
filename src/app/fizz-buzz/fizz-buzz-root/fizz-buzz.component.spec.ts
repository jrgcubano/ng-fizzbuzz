import { fakeAsync, tick, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FizzBuzzService, FakeFizzBuzzService } from '../shared/index';
import { FizzBuzzComponent } from './fizz-buzz.component';
import { FizzBuzzGivenComponent } from '../fizz-buzz-given/fizz-buzz-given.component';
import { FizzBuzzItemsComponent } from '../fizz-buzz-items/fizz-buzz-items.component';
import { FizzBuzzModule } from '../fizz-buzz.module';

import { MockFizzBuzzItemsComponent } from './testing/mock-fizz-buzz-items.component';

export function describe_tests() {
  describe('FizzBuzzComponent', () => {
    let results = ['Fizz', 'Buzz', 'FizzBuzz'];

    beforeEach(() => { });

    it('should verify kata when given triggered', fakeAsync(() => {
      create_fizzbuzz_component().then((fizzbuzz_component) => {
        fizzbuzz_component.trigger_given(1);
        let results = fizzbuzz_component.sub.results;
        expect(results).toEqual(['1']);
      });
    }));

    it('should display items data when results verified', fakeAsync(() => {
      create_fizzbuzz_component().then((fizzbuzz_component) => {
        fizzbuzz_component.sub.results = results;
        fizzbuzz_component.fire_results();
        let items = fizzbuzz_component.get_displayed_items();
        expect(items.length).toEqual(3);
      });
    }));

    function create_fizzbuzz_component(): Promise<any> {
      return new Promise<any>((resolve) => {
        TestBed.configureTestingModule({
          imports: [FizzBuzzModule]
        }).overrideModule(FizzBuzzModule, {
          remove: {
            providers: [FizzBuzzService],
            declarations: [FizzBuzzItemsComponent]
          },
          add: {
            providers: [{ provide: FizzBuzzService, useClass: FakeFizzBuzzService }],
            declarations: [MockFizzBuzzItemsComponent]
          }
        }).compileComponents().then(() => {
          let fizzbuzz_component = TestBed.createComponent(FizzBuzzComponent);
          resolve({
            trigger_given: (value: number) => {
              const givenEl = fizzbuzz_component.debugElement
                .query(By.css('mjs-fizz-buzz-given'));
              givenEl.triggerEventHandler('given', value);
            },
            fire_results: () => {
              fizzbuzz_component.detectChanges();
            },
            get_displayed_items: () => {
              const itemsEl = fizzbuzz_component.debugElement
                .query(By.css('mjs-fizz-buzz-items'));
              const items = itemsEl.queryAll(By.css('li'));
              return items;
            },
            sub: fizzbuzz_component.componentInstance
          })
        });
      });
    }
  });
}
