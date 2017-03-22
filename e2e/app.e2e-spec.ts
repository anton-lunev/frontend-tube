import { FrontendTubePage } from './app.po';

describe('frontend-tube App', () => {
  let page: FrontendTubePage;

  beforeEach(() => {
    page = new FrontendTubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
