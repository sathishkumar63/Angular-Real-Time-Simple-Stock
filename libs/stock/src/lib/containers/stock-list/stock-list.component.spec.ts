import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import * as fromStocks from '../../+state';
import { ErrorScreenComponent, MockStockCardComponent } from '../../components';
import { mockStocks } from '../../models';
import { StockListComponent } from './stock-list.component';

describe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;
  let store: Store<fromStocks.StocksFeatureState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StockListComponent,
        MockStockCardComponent,
        ErrorScreenComponent,
      ],
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

  it('should render resiliency error screen when the stocks$.length < 0', () => {
    // arrange
    component.stocks$ = of();
    // act
    fixture.detectChanges();
    const stockList = fixture.debugElement.query(By.css('.stock-list'))
      .nativeElement;
    // assert
    expect(stockList).toMatchSnapshot();
  });

  it('should render stocks card when the stocks$.length > 0', () => {
    // arrange
    component.stocks$ = of(mockStocks);
    // act
    fixture.detectChanges();
    const stockList = fixture.debugElement.query(By.css('.stock-list'))
      .nativeElement;
    // assert
    expect(stockList).toMatchSnapshot();
  });

  describe('ngOnInit', () => {
    it('GetStocks action should be dispatched', () => {
      // arrange
      jest.spyOn(store, 'dispatch');
      // act
      component.ngOnInit();
      // assert
      expect(store.dispatch).toHaveBeenCalledWith(new fromStocks.GetStocks());
    });
  });

  describe('onNotifyToggle', () => {
    it('SetStocks action should be dispatched with stock', () => {
      // arrange
      jest.spyOn(store, 'dispatch');
      const stock = mockStocks[0];
      // act
      component.onNotifyToggle(stock);
      // assert
      expect(store.dispatch).toHaveBeenCalledWith(
        new fromStocks.SetStocks(stock)
      );
    });
  });
});
