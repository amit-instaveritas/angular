import { InrUsdPipe } from './inr-usd-pipe';

describe('InrUsdPipe', () => {
  it('create an instance', () => {
    const pipe = new InrUsdPipe();
    expect(pipe).toBeTruthy();
  });
});
