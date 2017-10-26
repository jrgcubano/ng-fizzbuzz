export interface IRule {
  result: string;
  validate(value: number): boolean;
}

export abstract class Rule implements IRule {
  protected _value: number;
  protected _result: string;

  constructor(value: number, result: string) {
    this._value = value;
    this._result = result;
  }

  get result(): string {
    return this._result;
  }

  abstract validate(value: number): boolean;

  toString(): string {
    return `${this._result}`;
  }
}
