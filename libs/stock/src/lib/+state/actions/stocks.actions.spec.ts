import { mockStocks } from '../../models';
import * as fromStocks from './stocks.actions';

describe('GetStocks', () => {
  it('should create an instance', () => {
    const action = new fromStocks.GetStocks();
    expect(action).toEqual({
      type: fromStocks.StocksActionTypes.GetStocks,
    });
    expect(action).toMatchSnapshot();
  });
});

describe('GetStocksSuccess', () => {
  it('should create an instance', () => {
    const action = new fromStocks.GetStocksSuccess(mockStocks);
    expect(action).toEqual({
      type: fromStocks.StocksActionTypes.GetStocksSuccess,
      payload: mockStocks,
    });
    expect(action).toMatchSnapshot();
  });
});

describe('GetStocksFail', () => {
  it('should create an instance', () => {
    const error = new Error('error');
    const action = new fromStocks.GetStocksFail(error);
    expect(action).toEqual({
      type: fromStocks.StocksActionTypes.GetStocksFail,
      payload: error,
    });
    expect(action).toMatchSnapshot();
  });
});

describe('SetStocks', () => {
  test('should create an instance', () => {
    const action = new fromStocks.SetStocks(mockStocks[0]);
    expect(action).toEqual({
      type: fromStocks.StocksActionTypes.SetStocks,
      payload: mockStocks[0],
    });
    expect(action).toMatchSnapshot();
  });
});
