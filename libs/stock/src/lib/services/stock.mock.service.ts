import { Observable, of } from 'rxjs';
import { IStock, mockStocks } from '../models';

export class MockStockService {
  getStocks(): Observable<any> {
    return of();
  }

  formatStocksResponse(): IStock[] {
    return mockStocks;
  }
}
