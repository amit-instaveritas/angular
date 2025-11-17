import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'inrUsd'
})

export class InrUsdPipe implements PipeTransform {
  constructor(private http: HttpClient) { }

  transform(inrPrice: number, unknown: string, baseCurrency: string = 'INR'): Observable<string> {
    const apiUrl = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=2e616da2679e4b7282df154044b3a987`;

    return this.http.get<any>(apiUrl).pipe(
      map(response => {
        const rate = response.rates[baseCurrency];

        try {
          const convertedPrice = inrPrice * rate;
          const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: baseCurrency });

          return formatter.format(convertedPrice);
        } catch (error) {
          return (inrPrice * rate).toString();
        }
      })
    );
  }
}
