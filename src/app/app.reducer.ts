import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppStore } from './app.store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { homeFeatureKey } from './home/pages/home/store/home.store';
import { homeReducer } from './home/pages/home/store/home.reducer';

export const reducers: ActionReducerMap<AppStore> = {
  [homeFeatureKey]: homeReducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<AppStore>): ActionReducer<AppStore> {
  return localStorageSync({
    keys: [homeFeatureKey],
    rehydrate: true,
    storage: window.sessionStorage,
  })(reducer);
}

export const metaReducers: MetaReducer<AppStore>[] = [localStorageSyncReducer];
