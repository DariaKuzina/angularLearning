import { AngularTask1Page } from './app.po';

describe('angular-task1 App', () => {
  let page: AngularTask1Page;

  beforeEach(() => {
    page = new AngularTask1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
