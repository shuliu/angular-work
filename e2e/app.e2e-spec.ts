import { TddPage } from './app.po';

describe('TDDtodo', () => {
  let page: TddPage;

  beforeEach(() => {
    page = new TddPage();
  });

  it('should display todos', () => {
    page.navigateTo();
    expect(page.getTodos()).toBe('todos');
  });

  it(`input.new-todo placeholder is "What needs to be done?"`, () => {
    page.navigateTo();
    expect(page.getPlaceHolder()).toBe('What needs to be done?');
  });
});
