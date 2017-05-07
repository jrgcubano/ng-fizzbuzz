import { browser, element, by } from 'protractor';

export class MjslearnPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mjs-root h1')).getText();
  }
}
