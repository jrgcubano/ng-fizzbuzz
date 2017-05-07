import { TestBed, inject } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

import 'rxjs/add/observable/of';

export function describe_tests() {
  describe('FizzBuzzService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [FizzBuzzService]
      });
    });

    it('should return 1 when number is 1', inject([FizzBuzzService], (service: FizzBuzzService) => {
      service.verify(1).subscribe(res => expect(res).toBe('1'));
    }));
    it('should return 2 when number is 2', inject([FizzBuzzService], (service: FizzBuzzService) => {
      service.verify(2).subscribe(res => expect(res).toBe('2'));
    }));
    it('should return Fizz when number is multiple of 3', inject([FizzBuzzService], (service: FizzBuzzService) => {
      service.verify(3).subscribe(res => expect(res).toBe('Fizz'));
    }));
    it('should return Buzz when number is multiple of 5', inject([FizzBuzzService], (service: FizzBuzzService) => {
      service.verify(5).subscribe(res => expect(res).toBe('Buzz'));
    }));
    it('should return FizzBuzz when number is multiple of 3 and 5', inject([FizzBuzzService], (service: FizzBuzzService) => {
      service.verify(15).subscribe(res => expect(res).toBe('FizzBuzz'));
    }));
  });
}
