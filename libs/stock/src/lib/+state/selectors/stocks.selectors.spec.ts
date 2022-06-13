import { mockStocks, mockStocksFeatureState } from '../../models';
import { initialState, StocksState } from '../reducers';
import * as stocksSelectors from './stocks.selectors';

describe('Stocks Selectors', () => {
  it('should select stocks feature state', () => {
    // arrange + act
    const result = stocksSelectors.selectStocksState.projector(
      mockStocksFeatureState
    );
    // assert
    expect(result).toMatchSnapshot();
  });

  it('should return stocks data', () => {
    // arrange
    const mockData: StocksState = {
      ...initialState,
      data: mockStocks,
    };
    // act
    const result = stocksSelectors.getStocksData.projector(mockData);
    // assert
    expect(result).toEqual(mockStocks);
    expect(result).toMatchSnapshot();
  });

  it('should return loaded status', () => {
    // arrange
    const mockData: StocksState = {
      ...initialState,
      data: mockStocks,
    };
    // act
    const result = stocksSelectors.isStocksLoaded.projector(mockData);
    // assert
    expect(result).toMatchSnapshot();
  });

  it('should return loading status', () => {
    // arrange
    const mockData: StocksState = {
      ...initialState,
      data: mockStocks,
    };
    // act
    const result = stocksSelectors.isStocksLoading.projector(mockData);
    // assert
    expect(result).toMatchSnapshot();
  });
});
