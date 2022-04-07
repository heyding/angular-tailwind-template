import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromHome from './home.reducer';

export const selectHomeState = createFeatureSelector<fromHome.HomeState>(
  fromHome.homeFeatureKey
);

export const selectUserInput = createSelector(
  selectHomeState, state => state.userInput
);
