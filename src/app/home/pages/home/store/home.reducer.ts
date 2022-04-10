import {Action, createReducer, on} from '@ngrx/store';
import {defaultHomeStore, HomeState} from './home.store';
import {HomeActions} from './home.actions';

const homeRedux = createReducer(defaultHomeStore,
  on(HomeActions.setUserInput, (state, {userInput}) => ({...state, userInput})));

export function homeReducer(state: HomeState, action: Action): HomeState {
  return homeRedux(state, action);
}
