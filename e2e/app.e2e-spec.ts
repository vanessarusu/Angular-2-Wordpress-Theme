import { VanessarusuPage } from './app.po';

describe('vanessarusu App', function() {
  let page: VanessarusuPage;

  beforeEach(() => {
    page = new VanessarusuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
