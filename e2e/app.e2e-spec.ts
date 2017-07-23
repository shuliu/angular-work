import { TddPage } from './app.po';

describe('tdd App', () => {
  let page: TddPage;

  beforeEach(() => {
    page = new TddPage();
  });

  it('should display todos', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('todos');
  });

});
