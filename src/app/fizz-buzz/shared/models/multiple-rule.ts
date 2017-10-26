import { IRule, Rule } from './rule';

export interface IMultipleRule extends IRule { }

export class MultipleRule extends Rule implements IMultipleRule {
  constructor(value: number, result: string) {
    super(value, result);
  }

  validate(given: number): boolean {
    return given % this._value === 0;
  }
}
