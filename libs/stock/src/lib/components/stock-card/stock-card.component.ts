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

  onToggle(stock: IStock, event: Event) {
    const ischecked = (<HTMLInputElement>event.target).checked;
    setTimeout(
      () =>
        this.notifyToggle.emit({
          ...stock,
          isActive: ischecked,
        }),
      300
    );
  }
}
