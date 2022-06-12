import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StockCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
