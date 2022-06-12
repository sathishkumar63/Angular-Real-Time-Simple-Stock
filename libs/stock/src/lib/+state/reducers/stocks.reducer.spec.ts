import { initialState, stocksReducer } from './stocks.reducer';

describe('Stocks Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = stocksReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
