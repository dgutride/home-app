import { HomeAppPage } from './app.po';

describe('home-app App', () => {
  let page: HomeAppPage;

  beforeEach(() => {
    page = new HomeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
