import { IMultipleRule, MultipleRule } from './multiple-rule';

export class RuleFactory {
  static createMultiple(value: number, result: string): IMultipleRule {
    return new MultipleRule(value, result);
  }
}
