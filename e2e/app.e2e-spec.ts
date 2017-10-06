import { PmbSurveyPage } from './app.po';

describe('pmb-survey App', () => {
  let page: PmbSurveyPage;

  beforeEach(() => {
    page = new PmbSurveyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
