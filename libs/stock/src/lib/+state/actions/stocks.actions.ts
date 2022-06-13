import { Action } from '@ngrx/store';
import { IStock } from '../../models';

export enum StocksActionTypes {
  GetStocks = '[Stocks] Get',
  GetStocksSuccess = '[Stocks] Get Success',
  GetStocksFail = '[Stocks] Get Fail',
  SetStocks = '[Stocks] Set',
}

export class GetStocks implements Action {
  readonly type = StocksActionTypes.GetStocks;
}

export class GetStocksSuccess implements Action {
  readonly type = StocksActionTypes.GetStocksSuccess;
  constructor(public payload: IStock[]) {}
}

export class GetStocksFail implements Action {
  readonly type = StocksActionTypes.GetStocksFail;
  constructor(public payload: Error) {}
}

export class SetStocks implements Action {
  readonly type = StocksActionTypes.SetStocks;
  constructor(public payload: IStock) {}
}

export type StocksAction =
  | GetStocks
  | GetStocksSuccess
  | GetStocksFail
  | SetStocks;
