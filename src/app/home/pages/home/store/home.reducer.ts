import {createReducer, on} from '@ngrx/store';
import * as HomeActions from './home.actions';

export const homeFeatureKey = 'home';

export interface HomeState {
  userInput: string;
}

export const initialState: HomeState = {
  userInput: 'Hello world!'
};

export const reducer = createReducer(
  initialState,
  on(HomeActions.getUserInput, (state) => ({...state})),
  on(HomeActions.setUserInput, (state, {userInput}) => ({...state, userInput: userInput}))
);
