import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StockModule } from '@task/stock';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StockModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
