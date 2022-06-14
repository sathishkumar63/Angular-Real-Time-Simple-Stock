import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { IStock } from '../../models';

@Component({
  selector: 'stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StockCardComponent {
  @Input() stocksList: IStock[];
  @Output() notifyToggle = new EventEmitter<IStock>();

  onToggle(stock: IStock, isChecked: boolean) {
    setTimeout(
      () =>
        this.notifyToggle.emit({
          ...stock,
          isActive: isChecked,
        }),
      300
    );
  }
}
