import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mockStocks } from '../../models';
import { StockCardComponent } from './stock-card.component';

describe('StockCardComponent', () => {
  let component: StockCardComponent;
  let fixture: ComponentFixture<StockCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render stocks card when the stocksList.length > 0', () => {
    // arrange
    component.stocksList = mockStocks;
    // act
    fixture.detectChanges();
    const stockCardGroup = fixture.debugElement.query(
      By.css('.stock-card__group')
    ).nativeElement;
    // assert
    expect(stockCardGroup).toMatchSnapshot();
  });

  it('onToggle should be called when clicking the toggle', () => {
    // arrange
    jest.spyOn(component, 'onToggle');
    component.stocksList = mockStocks;
    // act
    fixture.detectChanges();
    const toggle = fixture.debugElement.queryAll(
      By.css('.stock-card__item__checkbox')
    )[0];
    toggle.nativeElement.click();
    fixture.detectChanges();
    // assert
    expect(component.onToggle).toBeCalledWith(mockStocks[0], true);
  });

  it('should emit notifyToggle event when onToggle method invoked', fakeAsync(() => {
    // arrange
    jest.spyOn(component.notifyToggle, 'emit');
    const isChecked = true;
    // act
    component.onToggle(mockStocks[0], isChecked);
    tick(300);
    // assert
    expect(component.notifyToggle.emit).toBeCalledWith({
      ...mockStocks[0],
      isActive: isChecked,
    });
  }));
});
