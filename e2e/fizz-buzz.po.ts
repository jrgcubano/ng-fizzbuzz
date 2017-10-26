import { browser, element, by, Key } from 'protractor';

export class FizzBuzzPage {
  navigateTo() {
    return browser.get('/');
  }

  getGivenInput() {
    return element(by.css('input'));
  }
  getResultItems() {
    return element.all(by.css('mat-list-item'));
  }
}
