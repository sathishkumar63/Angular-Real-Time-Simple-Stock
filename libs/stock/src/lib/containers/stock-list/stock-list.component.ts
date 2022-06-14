import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as fromStocks from '../../+state';
import { IStock } from '../../models';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StockListComponent implements OnInit, OnDestroy {
  stocksList: IStock[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private store: Store<fromStocks.StocksFeatureState>) {}

  ngOnInit(): void {
    this.store.dispatch(new fromStocks.GetStocks());
    this.getStocksList();
  }

  getStocksList() {
    this.subscriptions.add(
      this.store
        .select(fromStocks.getStocksData)
        .pipe(filter((res) => !!res))
        .subscribe((stocks: IStock[]) => (this.stocksList = stocks))
    );
  }

  onNotifyToggle(stock: IStock) {
    this.store.dispatch(new fromStocks.SetStocks(stock));
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}
