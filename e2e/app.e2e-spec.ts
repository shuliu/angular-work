import { TddPage } from './app.po';

describe('tdd App', () => {
  let page: TddPage;

  beforeEach(() => {
    page = new TddPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
