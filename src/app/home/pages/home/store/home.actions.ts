import {createAction, props} from '@ngrx/store';

// Load Data is just a dummy action and is not used
const loadData = createAction('[HOME] LOAD DATA');
const getUserInput = createAction('[HOME] GET USER INPUT');
const setUserInput = createAction('[HOME] SET USER INPUT', props<{ userInput: string }>());

export const HomeActions = {
  loadData,
  getUserInput,
  setUserInput
}
