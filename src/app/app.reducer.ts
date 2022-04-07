import {ActionReducerMap} from '@ngrx/store';
import * as fromHome from './home/pages/home/store/home.reducer';

export interface AppState {
  home: fromHome.HomeState;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  home: fromHome.reducer
};
