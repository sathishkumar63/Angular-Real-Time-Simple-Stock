import { Component, Input } from '@angular/core';
import { IStock } from '../../models';

@Component({
  selector: 'stock-card',
  template: ''
})
export class MockStockCardComponent {
  @Input() stocksList: IStock[];
}
