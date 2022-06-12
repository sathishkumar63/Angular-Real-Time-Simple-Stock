import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent, StockRootComponent } from './containers';
import { StockRoutingModule } from './stock.routing.module';

@NgModule({
  imports: [CommonModule, StockRoutingModule],
  declarations: [StockRootComponent, StockListComponent],
  exports: [StockRootComponent],
})
export class StockModule {}
