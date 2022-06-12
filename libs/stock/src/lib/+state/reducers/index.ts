import { ActionReducerMap } from '@ngrx/store';
import * as fromStocks from './stocks.reducer';

export * from './stocks.reducer';
export const stocksFeatureKey = 'simpleStocks';

export interface StocksFeatureState {
  stocks: fromStocks.StocksState;
}

export const reducers: ActionReducerMap<StocksFeatureState> = {
  stocks: fromStocks.stocksReducer,
};
