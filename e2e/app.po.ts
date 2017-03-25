import { browser, element, by } from 'protractor';

export class FrontendTubePage {
  navigateTo() {
    return browser.get('/');
  }

  getIconsSprite() {
    return element(by.css('app-root app-icons-sprite'));
  }
}
