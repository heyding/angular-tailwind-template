import {ActionReducer, ActionReducerMap, combineReducers, MetaReducer} from '@ngrx/store';
import {AppStore} from './app.store';
import {localStorageSync} from 'ngrx-store-localstorage';
import {homeFeatureKey} from './home/pages/home/store/home.store';
import {homeReducer} from './home/pages/home/store/home.reducer';

// There seems to be a bug with redux. This declaration leads to compile errors. The option to use combineReducers works.
/*
export const reducers: ActionReducerMap<AppStore> = {
  home: homeReducer,
};*/

export const reducers = combineReducers({homeReducer} as any);

export function localStorageSyncReducer(reducer: ActionReducer<AppStore>): ActionReducer<AppStore> {
  return localStorageSync({
    keys: [
      homeFeatureKey
    ],
    rehydrate: true,
    storage: window.sessionStorage
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
