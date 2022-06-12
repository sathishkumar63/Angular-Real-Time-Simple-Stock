import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StockListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
