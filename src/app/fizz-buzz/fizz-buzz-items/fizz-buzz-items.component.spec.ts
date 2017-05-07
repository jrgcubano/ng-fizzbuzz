import { fakeAsync, async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FizzBuzzModule } from '../fizz-buzz.module';
import { FizzBuzzItemsComponent } from './fizz-buzz-items.component';

export function describe_tests() {
  describe('FizzBuzzItemsComponent', () => {
    let results = ['Fizz', 'Buzz', 'FizzBuzz'];
    beforeEach(() => { });

    it('should set items when supplied data input', fakeAsync(() => {
      create_fizzbuzz_items_component().then((fizzbuzz_items_component) => {
        fizzbuzz_items_component.sub.data = results;
        fizzbuzz_items_component.fire_data();
        let items = fizzbuzz_items_component.sub.items;
        expect(items.length).toBe(3);
      });
    }));

    it('should display items when supplied data input', fakeAsync(() => {
      create_fizzbuzz_items_component().then((fizzbuzz_items_component) => {
        fizzbuzz_items_component.sub.data = results;
        const items = fizzbuzz_items_component.get_displayed_items();
        expect(items.length).toBe(3);
      });
    }));

    function create_fizzbuzz_items_component(): Promise<any> {
      return new Promise<any>((resolve) => {
        TestBed.configureTestingModule({
          imports: [FizzBuzzModule]
        }).compileComponents().then(() => {
          let fizzbuzz_items_component = TestBed.createComponent(FizzBuzzItemsComponent);
          resolve({
            fire_data: () => {
              fizzbuzz_items_component.detectChanges();
            },
            get_displayed_items: (): any => {
              fizzbuzz_items_component.detectChanges();
              const items = fizzbuzz_items_component.debugElement
                .queryAll(By.css('md-list-item'));
              return items;
            },
            sub: fizzbuzz_items_component.componentInstance
          })
        });
      });
    }
  });
}
