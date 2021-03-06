import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import * as fromStocks from '../../+state';
import { IStock, stocksSymbol } from '../../models';
import { WebSocketService } from '../../services';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StockListComponent implements OnInit, OnDestroy {
  stocks$: Observable<IStock[]>;

  constructor(
    private store: Store<fromStocks.StocksFeatureState>,
    private webSocketService: WebSocketService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new fromStocks.GetStocks());
    this.stocks$ = this.store
    .select(fromStocks.getStocksData);

    if (this.webSocketService.socket$) {
      this.webSocketService.send(stocksSymbol);
    }
    this.webSocketService
      .connect()
      .pipe(
        map((response: any) => {
          this.store.dispatch(new fromStocks.SetStocks(response));
        })
      )
      .subscribe();

    this.webSocketService.socketOpen$.subscribe(() =>
      this.webSocketService.send(stocksSymbol)
    );
  }

  onNotifyToggle(stock: IStock) {
    this.store.dispatch(new fromStocks.SetStocks(stock));
  }

  ngOnDestroy(): void {
    this.webSocketService.unsubscribe(stocksSymbol);
  }
}
