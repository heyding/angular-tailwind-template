import {createAction, props} from '@ngrx/store';

export const loadData = createAction(
  '[HOME] LOAD DATA'
);

export const getUserInput = createAction(
  '[HOME] GET USER INPUT'
);

export const setUserInput = createAction(
  '[HOME] SET USER INPUT',
  props<{ userInput: string }>()
);

