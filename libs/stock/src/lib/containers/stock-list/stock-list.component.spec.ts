import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import * as fromStocks from '../../+state';
import { MockStockCardComponent } from '../../components';
import { StockListComponent } from './stock-list.component';

describe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;
  let store: Store<fromStocks.StocksFeatureState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockListComponent, MockStockCardComponent],
      imports: [
        StoreModule.forRoot([]),
        StoreModule.forFeature(
          fromStocks.stocksFeatureKey,
          fromStocks.reducers
        ),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
