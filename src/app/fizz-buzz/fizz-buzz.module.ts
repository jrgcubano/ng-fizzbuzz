import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatListModule } from '@angular/material';

import { FizzBuzzService } from './shared/index';
import { FizzBuzzComponent } from './fizz-buzz-root/fizz-buzz.component';
import { FizzBuzzGivenComponent } from './fizz-buzz-given/fizz-buzz-given.component';
import { FizzBuzzItemsComponent } from './fizz-buzz-items/fizz-buzz-items.component';

import 'rxjs/add/observable/range';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    FizzBuzzComponent,
    FizzBuzzGivenComponent,
    FizzBuzzItemsComponent,
  ],
  providers: [FizzBuzzService],
  exports: [FizzBuzzComponent],
})
export class FizzBuzzModule {}
