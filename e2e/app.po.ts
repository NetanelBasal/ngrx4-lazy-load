import { browser, element, by } from 'protractor';

export class Ngrx4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('play-root h1')).getText();
  }
}
