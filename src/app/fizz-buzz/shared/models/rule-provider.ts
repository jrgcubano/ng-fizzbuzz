import { IMultipleRule } from './multiple-rule';
import { RuleMultiples } from './rule-multiples';
import { RuleResults } from './rule-results';
import { RuleFactory } from './rule-factory';

export class RuleProvider {
  static fizzMultiple(): IMultipleRule {
    return RuleFactory.createMultiple(RuleMultiples.FIZZ_MULTIPLE, RuleResults.FIZZ_RESULT);
  }

  static buzzMultiple(): IMultipleRule {
    return RuleFactory.createMultiple(RuleMultiples.BUZZ_MULTIPLE, RuleResults.BUZZ_RESULT);
  }
}
