import { StocksFeatureState, StocksState } from '../+state';
import { IStock } from './stock.interface';

export const mockStocks: IStock[] = [
  {
    name: 'Alphabet',
    symbol: 'GOOG',
    currency: 'USD',
    currentPrice: 2228.55,
    dayHighPrice: 2269.94,
    dayLowPrice: 2217.22,
    fiftyTwoWeekLow: 2044.16,
    fiftyTwoWeekHigh: 3042,
    regularMarketVolume: 1567487,
  },
  {
    name: 'Microsoft',
    symbol: 'MSFT',
    currency: 'USD',
    currentPrice: 252.99,
    dayHighPrice: 260.54,
    dayLowPrice: 252.86,
    fiftyTwoWeekLow: 246.44,
    fiftyTwoWeekHigh: 349.67,
    regularMarketVolume: 31445841,
  },
];

export const mockStocksState: StocksState = {
  data: mockStocks,
  loading: false,
  loaded: true
};

export const mockStocksFeatureState: StocksFeatureState = {
  stocks: mockStocksState
};
