import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromStocksAction from '../actions';
import { StockService } from '../../services';
import { stocksSymbol } from '../../models';

@Injectable()
export class StocksEffects {
  constructor(private actions$: Actions, private stockService: StockService) {}

  @Effect() getStocks$ = this.actions$.pipe(
    ofType<fromStocksAction.GetStocks>(
      fromStocksAction.StocksActionTypes.GetStocks
    ),
    switchMap(() =>
      this.stockService.getStocks(stocksSymbol).pipe(
        map((response: any) => {
          return new fromStocksAction.GetStocksSuccess(
            response?.quoteResponse?.result
          );
        }),
        catchError((err: Error) => of(new fromStocksAction.GetStocksFail(err)))
      )
    )
  );
}
