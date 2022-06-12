import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStocks from '../reducers';

export const selectStocksState = createFeatureSelector<
  fromStocks.StocksFeatureState
>(fromStocks.stocksFeatureKey);

export const getStocksState = createSelector(
  selectStocksState,
  (state: fromStocks.StocksFeatureState) => state?.stocks
);

export const getStocksData = createSelector(
  getStocksState,
  (state: fromStocks.StocksState) => state?.data
);

export const isStocksLoaded = createSelector(
  getStocksState,
  (state: fromStocks.StocksState): boolean => state?.loaded
);

export const isStocksLoading = createSelector(
  getStocksState,
  (state: fromStocks.StocksState): boolean => state?.loading
);
