import { IRule, Rule } from './rule';

export interface IRuleKata {
  verify(value: number): string;
}

export abstract class RuleKata implements IRuleKata {
  private readonly _rules: IRule[];

  constructor() {
    this._rules = [];
  }

  protected addRule(...rules: IRule[]) {
    for (let i = 0; i < rules.length; i++) {
      this._rules.push(rules[i]);
    }
  }

  verify(value: number): string {
    const passed = this._rules.filter(rule => rule.validate(value));
    if (passed.length === 0)
      return value.toString();
    return passed.join('');
  }
}


