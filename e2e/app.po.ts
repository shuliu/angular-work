import { browser, by, element } from 'protractor';

export class TddPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTodos() {
    // return element(by.css)
  }
}
