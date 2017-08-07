import { browser, by, element } from 'protractor';

export class TddPage {
  navigateTo() {
    return browser.get('/');
  }

  getTodos() {
    return element(by.css('app-root h1')).getText();
  }

  getPlaceHolder() {
    return element(by.css('.new-todo')).getAttribute('placeholder');
  }
}
