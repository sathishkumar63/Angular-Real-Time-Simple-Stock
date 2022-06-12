import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StocksEffects } from './stocks.effects';

describe('StocksEffects', () => {
  let actions$: Observable<any>;
  let effects: StocksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StocksEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(StocksEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
