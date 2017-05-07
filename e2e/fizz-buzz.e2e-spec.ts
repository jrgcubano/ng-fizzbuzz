import { FizzBuzzPage } from './fizz-buzz.po';

describe('FizzBuzz', () => {
  let page: FizzBuzzPage;

  beforeEach(() => {
    page = new FizzBuzzPage();
  });

  it('should start with empty given input', () => {
    page.navigateTo();
    const value = page.getGivenInput().getText();
    const items = page.getResultItems();
    expect(value).toEqual('');
    expect(items.count()).toEqual(0);
  });

  // it('should verify input when given a valid', () => {
  //   page.navigateTo();
  //   const input = page.getGivenInput();
  //   input.sendKeys('15');
  //   const value = input.getText();
  //   const items = page.getResultItems();
  //   expect(value).toEqual(15);
  //   expect(items.count()).toEqual(15);
  // });
});
