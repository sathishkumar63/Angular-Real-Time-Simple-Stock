import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'stock-root',
  templateUrl: './stock-root.component.html',
  styleUrls: ['./stock-root.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StockRootComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
