import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { InrUsdPipe } from './inr-usd-pipe';

describe('InrUsdPipe', () => {
  let pipe: InrUsdPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InrUsdPipe]
    });
    pipe = TestBed.inject(InrUsdPipe);
  });

  fit('should transform INR price to USD', async () => {
    const inrPrice = 100;
    const baseCurrency = 'USD';
    const response = {
      rates: {
        USD: 0.015
      }
    };
    spyOn(pipe['http'], 'get').and.returnValue(of(response));

    const result = await pipe.transform(inrPrice, 'INR', baseCurrency).toPromise();

    expect(result).toBe('$1.50');
  });
});
