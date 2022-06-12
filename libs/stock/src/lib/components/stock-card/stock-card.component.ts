import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StockCardComponent {
  @Input() stocksList: any[];
  @Output() notifyToggle = new EventEmitter();

  onToggle(stock: any, event: any) {
    setTimeout(
      () =>
        this.notifyToggle.emit({
          ...stock,
          isActive: event.target.checked,
        }),
      300
    );
  }
}
