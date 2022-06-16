import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { tap } from 'rxjs/operators';
import { IStock } from '../../models';
import { DevicesService } from '../../services';

@Component({
  selector: 'stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StockCardComponent {
  @Input() stocksList: IStock[];
  @Output() notifyToggle = new EventEmitter<IStock>();
  isMobile: boolean;

  constructor(private devicesService: DevicesService) {}

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
