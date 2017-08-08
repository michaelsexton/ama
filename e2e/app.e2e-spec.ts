import { AustralianminesatlasUiPage } from './app.po';

describe('australianminesatlas-ui App', () => {
  let page: AustralianminesatlasUiPage;

  beforeEach(() => {
    page = new AustralianminesatlasUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
