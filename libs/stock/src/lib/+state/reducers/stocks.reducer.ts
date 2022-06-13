import { StocksAction, StocksActionTypes } from '../actions';

export interface StocksState {
  data: any[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: StocksState = {
  data: null,
  loading: false,
  loaded: false,
};

export function stocksReducer(
  state: StocksState = initialState,
  action: StocksAction
): StocksState {
  switch (action.type) {
    case StocksActionTypes.GetStocks:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case StocksActionTypes.GetStocksSuccess:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true,
      };
    case StocksActionTypes.GetStocksFail:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case StocksActionTypes.SetStocks:
      return {
        ...state,
        data: state.data?.map((item) =>
          item.symbol === action.payload.symbol
            ? { ...item, ...action.payload }
            : item
        ),
      };
    default:
      return state;
  }
}
