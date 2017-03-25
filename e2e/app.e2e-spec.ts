import { FrontendTubePage } from './app.po';

describe('frontend-tube App', () => {
  let page: FrontendTubePage;

  beforeEach(() => {
    page = new FrontendTubePage();
  });

  it('should render icons sprite', () => {
    page.navigateTo();
    expect(page.getIconsSprite()).toBeDefined();
  });
});
