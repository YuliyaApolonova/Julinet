import { JulinetPage } from './app.po';

describe('julinet App', () => {
  let page: JulinetPage;

  beforeEach(() => {
    page = new JulinetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
