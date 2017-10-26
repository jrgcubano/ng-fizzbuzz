import { fakeAsync, async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FizzBuzzModule } from '../fizz-buzz.module';
import { FizzBuzzGivenComponent } from './fizz-buzz-given.component';

export function describe_tests() {
  describe('FizzBuzzGivenComponent', () => {
    beforeEach(() => { });

    it('should raise given event when entered input value', fakeAsync(() => {
      create_fizzbuzz_given_component().then((fizzbuzz_given_component) => {
        let givenValue: number;
        fizzbuzz_given_component.sub.given.subscribe((value: number) => givenValue = value);
        fizzbuzz_given_component.enter_number(15);
        tick(400); // advance debounceTime scheduler
        expect(givenValue).toBe(15);
      });
    }));

    it('should validate wrong number 1 <= n <= 100 when wrong value', fakeAsync(() => {
      create_fizzbuzz_given_component().then((fizzbuzz_given_component) => {
        let givenValue: number;
        fizzbuzz_given_component.sub.given.subscribe((value: number) => givenValue = value);
        fizzbuzz_given_component.enter_number(1000);
        tick(400); // advance debounceTime scheduler
        const current = fizzbuzz_given_component.sub.formErrors['numbers'];
        const message = fizzbuzz_given_component.sub.validationMessages['numbers']['checkRange'];
        const hint = fizzbuzz_given_component.get_error_hint();
        expect(givenValue).toBeUndefined();
        expect(current).toEqual(message);
        expect(hint).toEqual(message);
      });
    }));

    function create_fizzbuzz_given_component(): Promise<any> {
      return new Promise<any>((resolve) => {
        TestBed.configureTestingModule({
          imports: [FizzBuzzModule]
        })
          .compileComponents().then(() => {
            const fizzbuzz_given_component = TestBed.createComponent(FizzBuzzGivenComponent);
            resolve({
              enter_number: (value: number) => {
                fizzbuzz_given_component.detectChanges();
                const given_input = fizzbuzz_given_component.debugElement
                  .query(By.css('input')).nativeElement;
                given_input.value = value;
                given_input.dispatchEvent(new Event('input'));
                fizzbuzz_given_component.detectChanges();
              },
              get_error_hint: (value: number) => {
                fizzbuzz_given_component.detectChanges();
                const input_hint = fizzbuzz_given_component.debugElement
                  .query(By.css('mat-hint'))
                  .query(By.css('span')).nativeElement;
                const text = input_hint.textContent;
                return text;
              },
              sub: fizzbuzz_given_component.componentInstance
            });
          });
      });
    }
  });
}
