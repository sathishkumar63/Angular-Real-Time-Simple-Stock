import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockStocks, QUOTE_URL } from '../../models';
import { StockService } from './stock.service';

describe('StockService', () => {
  let service: StockService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(StockService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getStocks', () => {
    it('should return stocks', () => {
      service
        .getStocks(['tsla'])
        .subscribe((data) => expect(data).toEqual(mockStocks));
      const req = mockHttp.expectOne(
        `https://cors-anywhere.herokuapp.com/${QUOTE_URL}symbols=tsla`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockStocks);
      mockHttp.verify();
    });
  });

  describe('formatStocksResponse', () => {
    it('should format and return the stocks', () => {
      // arrange + act
      const result = service.formatStocksResponse(mockStocks);
      // assert
      expect(result).toMatchSnapshot();
    });
  });
});
