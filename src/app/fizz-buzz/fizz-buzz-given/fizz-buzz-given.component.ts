import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GivenValidators } from './fizz-buzz-given.validators';

@Component({
  selector: 'mjs-fizz-buzz-given',
  templateUrl: './fizz-buzz-given.component.html',
  styleUrls: ['./fizz-buzz-given.component.scss']
})
export class FizzBuzzGivenComponent implements OnInit {
  @Output() given = new EventEmitter<number>();

  form: FormGroup;

  constructor(
    private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      numbers: ['', [Validators.required, GivenValidators.checkRange]]
    });

    this.form.get('numbers')
      .valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((value: number) => {
        if(this.verifyValueChanged('numbers', value)) {
          this.given.emit(value)
        }
      });

    this.verifyValueChanged('numbers'); // (re)set validation messages now
  }

  verifyValueChanged(field: string, data?: any): boolean {
    if (!this.form) { return; }
    const form = this.form;
    // clear previous error message (if any)
    this.formErrors[field] = '';
    const control = form.get(field);
    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[field];
      for (const key in control.errors) {
        this.formErrors[field] = messages[key];
        return false;
      }
    }
    return true;
  }

  formErrors = {
    'numbers': '',
  };

  validationMessages = {
    'numbers': {
      'required': 'Number is required.',
      'checkRange': 'Enter a valid number between 1 and 100'
    }
  }
}
