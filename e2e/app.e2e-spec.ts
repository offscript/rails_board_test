import { RailsBoardPage } from './app.po';

describe('rails-board App', () => {
  let page: RailsBoardPage;

  beforeEach(() => {
    page = new RailsBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
