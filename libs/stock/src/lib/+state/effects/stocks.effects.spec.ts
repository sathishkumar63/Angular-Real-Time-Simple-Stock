import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from '@nrwl/angular/testing';
import { Observable, of, throwError } from 'rxjs';
import { MockStockService, StockService } from '../../services';
import { StocksEffects } from './stocks.effects';
import * as fromStocksAction from '../actions';
import { mockStocks } from '../../models';

describe('StocksEffects', () => {
  let actions$: Observable<any>;
  let effects: StocksEffects;
  let stockService: StockService;
  const error = new Error('api error');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StocksEffects,
        provideMockActions(() => actions$),
        {
          provide: StockService,
          useClass: MockStockService,
        },
      ],
    });

    effects = TestBed.inject(StocksEffects);
    stockService = TestBed.inject(StockService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getStocks$', () => {
    it('should get quizzes', () => {
      // arrange
      jest
        .spyOn(stockService, 'getStocks')
        .mockImplementation(() => of(mockStocks));
      const effectTrigger = new fromStocksAction.GetStocks();
      const dispatchAction = new fromStocksAction.GetStocksSuccess(mockStocks);
      // act
      actions$ = hot('-a', { a: effectTrigger });
      const expected = cold('-b', {
        b: dispatchAction,
      });
      // assert
      expect(effects.getStocks$).toBeObservable(expected);
    });

    it('should trigger failure effect when API throws error', () => {
      // arrange
      jest
        .spyOn(stockService, 'getStocks')
        .mockImplementation(() => throwError(error));
      const effectTrigger = new fromStocksAction.GetStocks();
      const dispatchAction = new fromStocksAction.GetStocksFail(error);
      // act
      actions$ = hot('-a', { a: effectTrigger });
      const expected = cold('-b', { b: dispatchAction });
      // assert
      expect(effects.getStocks$).toBeObservable(expected);
    });
  });
});
