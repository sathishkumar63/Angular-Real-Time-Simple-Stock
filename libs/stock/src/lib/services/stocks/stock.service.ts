import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  getStocks(symbols: string[]): Observable<any> {
    // HttpRequest has been blocked by CORS policy. So, add cors-anywhere.herokuapp.com to this link.
    const uri = `https://cors-anywhere.herokuapp.com/query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols?.join()}`;
    return this.http.get(uri);
  }

  formatStocksResponse(stocks: any[]): any[] {
    return stocks?.map((stock) => ({
      name: stock.displayName,
      symbol: stock.symbol,
      currency: stock.currency,
      currentPrice: stock.regularMarketPrice,
      dayHighPrice: stock.regularMarketDayHigh,
      dayLowPrice: stock.regularMarketDayLow,
      fiftyTwoWeekLow: stock.fiftyTwoWeekLow,
      fiftyTwoWeekHigh: stock.fiftyTwoWeekHigh,
      regularMarketVolume: stock.regularMarketVolume
    }));
  }
}
