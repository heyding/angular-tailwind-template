import {Action} from '@ngrx/store';

// Load Data is just a dummy action and is not used
export const LOAD_DATA = '[HOME] LOAD_DATA';
export const SET_USER_INPUT = '[HOME] SET_USER_INPUT';

export class LoadData implements Action {
  readonly type = LOAD_DATA;
}

export class SetUserInput implements Action {
  readonly type = SET_USER_INPUT;

  constructor(public payload: string) {
  }
}

export type HomeActions = LoadData | SetUserInput
