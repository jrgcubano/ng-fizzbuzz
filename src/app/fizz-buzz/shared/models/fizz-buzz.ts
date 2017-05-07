import { IRuleKata, RuleKata } from './rule-kata';
import { RuleProvider } from './rule-provider';

export interface IFizzBuzz extends IRuleKata { }

export class FizzBuzz extends RuleKata implements IFizzBuzz {
  constructor() {
    super();
    this.addRule(
      RuleProvider.fizzMultiple(),
      RuleProvider.buzzMultiple());
  }
}
