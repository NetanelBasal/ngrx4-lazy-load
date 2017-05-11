import { Ngrx4Page } from './app.po';

describe('ngrx4 App', () => {
  let page: Ngrx4Page;

  beforeEach(() => {
    page = new Ngrx4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('play works!');
  });
});
