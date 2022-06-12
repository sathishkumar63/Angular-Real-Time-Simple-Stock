import { Action } from '@ngrx/store';

export enum StocksActionTypes {
  GetStocks = '[Stocks] Get',
  GetStocksSuccess = '[Stocks] Get Success',
  GetStocksFail = '[Stocks] Get Fail',
}

export class GetStocks implements Action {
  readonly type = StocksActionTypes.GetStocks;
}

export class GetStocksSuccess implements Action {
  readonly type = StocksActionTypes.GetStocksSuccess;
  constructor(public payload: any) {}
}

export class GetStocksFail implements Action {
  readonly type = StocksActionTypes.GetStocksFail;
  constructor(public payload: Error) {}
}

export type StocksAction = GetStocks | GetStocksSuccess | GetStocksFail;
