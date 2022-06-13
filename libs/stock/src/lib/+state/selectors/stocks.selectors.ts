import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStock } from '../../models';
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
  (state: fromStocks.StocksState): IStock[] => state?.data
);

export const isStocksLoaded = createSelector(
  getStocksState,
  (state: fromStocks.StocksState): boolean => state?.loaded
);

export const isStocksLoading = createSelector(
  getStocksState,
  (state: fromStocks.StocksState): boolean => state?.loading
);
