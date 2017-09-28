import { describe_tests as describe_fizzbuzz_service_tests } from './shared/services/fizz-buzz.service.spec';
import { describe_tests as describe_fizzbuzz_given_tests } from './fizz-buzz-given/fizz-buzz-given.component.spec';
import { describe_tests as describe_fizzbuzz_items_tests } from './fizz-buzz-items/fizz-buzz-items.component.spec';
import { describe_tests as describe_fizzbuzz_root_tests } from './fizz-buzz-root/fizz-buzz.component.spec';

describe('When we test FizzBuzz module, we have', () => {
  describe_fizzbuzz_service_tests();
  describe_fizzbuzz_given_tests();
  describe_fizzbuzz_items_tests();
  describe_fizzbuzz_root_tests();
});
