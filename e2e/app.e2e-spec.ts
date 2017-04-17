import { QuickAngularPage } from './app.po';

describe('quick-angular App', () => {
  let page: QuickAngularPage;

  beforeEach(() => {
    page = new QuickAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
