import {Action} from '@ngrx/store';

// Load Data is just a dummy action and is not used
export const LOAD_DATA = 'LOAD_DATA';
export const GET_USER_INPUT = 'GET_USER_INPUT';
export const SET_USER_INPUT = 'SET_USER_INPUT';

export class LoadData implements Action {
  readonly type = LOAD_DATA;
}

export class GetUserInput implements Action {
  readonly type = GET_USER_INPUT;
}

export class SetUserInput implements Action {
  readonly type = SET_USER_INPUT;

  constructor(public payload: string) {
  }
}

export type HomeActions = LoadData | GetUserInput | SetUserInput
