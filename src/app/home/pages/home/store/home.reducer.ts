import * as HomeActions from './home.actions';

export const homeFeatureKey = 'home';

export interface HomeState {
  userInput: string;
}

export const initialHomeState: HomeState = {
  userInput: 'Hello world!'
};


export function homeReducer(state: HomeState = initialHomeState, action: HomeActions.HomeActions): HomeState {
  switch (action.type) {
    case HomeActions.SET_USER_INPUT:
      return {
        ...state,
        userInput: action.payload
      };
    default:
      return state;
  }
}
