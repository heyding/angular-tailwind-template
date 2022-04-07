import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HomeEffects } from './home.effects';

describe('HomeEffects', () => {
  let actions$: Observable<any>;
  let effects: HomeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HomeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(HomeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
