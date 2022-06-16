export interface IStock {
  name?: string;
  symbol: string;
  currency?: string;
  currentPrice: number;
  dayHighPrice?: number;
  dayLowPrice?: number;
  fiftyTwoWeekLow?: number;
  fiftyTwoWeekHigh?: number;
  regularMarketVolume?: number;
  isActive?: boolean;
}
