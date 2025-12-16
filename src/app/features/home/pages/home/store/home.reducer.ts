import { createReducer, on } from '@ngrx/store';
import { defaultHomeStore, HomeState } from './home.store';
import { HomeActions } from './home.actions';

const _homeReducer = createReducer(
  defaultHomeStore,
  on(HomeActions.setUserInput, (state, { userInput }) => ({ ...state, userInput }))
);

export function homeReducer(state: HomeState | undefined, action: any): HomeState {
  return _homeReducer(state, action);
}
