import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStore} from '../../../../app.store';
import {HomeState} from './home.store';

const selectFeature = createFeatureSelector<AppStore, HomeState>('home');

const selectUserInput = createSelector(selectFeature, homeState => homeState.userInput);

export const HomeSelectors = {
  selectUserInput: selectUserInput,
};
