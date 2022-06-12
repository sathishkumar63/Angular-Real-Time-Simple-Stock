import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { GetStocks, GetStocksSuccess, StocksActionTypes } from '../actions';

@Injectable()
export class StocksEffects {
  getStockss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetStocks>(StocksActionTypes.GetStocks),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) => new GetStocksSuccess({ data })),
          catchError((error) => of(new GetStocks()))
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
