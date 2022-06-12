import * as fromStocks from '../reducers';
import { selectStocksState } from './stocks.selectors';

describe('Stocks Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStocksState({
      [fromStocks.stocksFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
