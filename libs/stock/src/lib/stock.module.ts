import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRoutingModule } from './stock.routing.module';
import { StockListComponent, StockRootComponent } from './containers';
import { StockCardComponent } from './components';

@NgModule({
  imports: [CommonModule, StockRoutingModule],
  declarations: [StockRootComponent, StockListComponent, StockCardComponent],
  exports: [StockRootComponent],
})
export class StockModule {}
