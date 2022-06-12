import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  GetStocks,
  getStocksData,
  SetStocks,
  StocksFeatureState,
} from '../../+state';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StockListComponent implements OnInit, OnDestroy {
  stocksList: any[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private store: Store<StocksFeatureState>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetStocks());
    this.getStocksList();
  }

  getStocksList() {
    this.subscriptions.add(
      this.store
        .select(getStocksData)
        .pipe(filter((res) => !!res))
        .subscribe((stocks: any[]) => (this.stocksList = stocks))
    );
  }

  onNotifyToggle(stock: any) {
    this.store.dispatch(new SetStocks(stock));
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}
