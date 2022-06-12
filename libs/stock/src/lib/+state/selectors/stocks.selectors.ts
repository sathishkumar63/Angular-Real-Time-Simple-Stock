import { createFeatureSelector } from '@ngrx/store';
import * as fromStocks from '../reducers';

export const selectStocksState = createFeatureSelector<
  fromStocks.StocksFeatureState
>(fromStocks.stocksFeatureKey);
