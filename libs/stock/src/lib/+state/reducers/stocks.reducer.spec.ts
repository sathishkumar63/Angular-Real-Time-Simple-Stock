import { initialState, stocksReducer } from './stocks.reducer';
import * as fromStocksAction from '../actions';
import { mockStocks } from '../../models';

describe('Stocks Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      // arrange
      const action = {} as any;
      // act
      const result = stocksReducer(initialState, action);
      // assert
      expect(result).toBe(initialState);
    });
  });

  describe('GetStocks', () => {
    it('should return new state with loading true', () => {
      // arrange
      const action = new fromStocksAction.GetStocks();
      // act
      const result = stocksReducer(initialState, action);
      // assert
      expect(result.loading).toBe(true);
      expect(result).toMatchSnapshot();
    });
  });

  describe('GetStocksSuccess', () => {
    it('should return new state', () => {
      // arrange
      const action = new fromStocksAction.GetStocksSuccess(mockStocks);
      // act
      const result = stocksReducer(initialState, action);
      // assert
      expect(result.data).toEqual(mockStocks);
      expect(result.loaded).toBe(true);
      expect(result.loading).toBe(false);
      expect(result).toMatchSnapshot();
    });
  });

  describe('GetStocksFail', () => {
    it('should return new state with loading and loaded false', () => {
      // arrange
      const action = new fromStocksAction.GetStocksFail(null);
      // act
      const result = stocksReducer(initialState, action);
      // assert
      expect(result.loaded).toBe(false);
      expect(result.loading).toBe(false);
      expect(result).toMatchSnapshot();
    });
  });

  describe('SetStocks', () => {
    it('should update and return the new state', () => {
      // arrange
      const action = new fromStocksAction.SetStocks(mockStocks[0]);
      // act
      const result = stocksReducer(initialState, action);
      // assert
      expect(result).toMatchSnapshot();
    });
  });
});
