import { GetMeHealthyPage } from './app.po';

describe('get-me-healthy App', () => {
  let page: GetMeHealthyPage;

  beforeEach(() => {
    page = new GetMeHealthyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
