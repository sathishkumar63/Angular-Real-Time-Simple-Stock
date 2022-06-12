import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StockRoutingModule } from './stock.routing.module';
import { StockListComponent, StockRootComponent } from './containers';
import { StockCardComponent } from './components';
import * as fromStocks from './+state';
import { StockService } from './services';

@NgModule({
  imports: [
    CommonModule,
    StockRoutingModule,
    StoreModule.forFeature(fromStocks.stocksFeatureKey, fromStocks.reducers),
    EffectsModule.forFeature(fromStocks.effects),
  ],
  declarations: [StockRootComponent, StockListComponent, StockCardComponent],
  exports: [StockRootComponent],
  providers: [StockService],
})
export class StockModule {}
