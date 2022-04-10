export const homeFeatureKey = 'home';

export interface HomeState {
  userInput: string;
}

export const defaultHomeStore: HomeState = {
  userInput: 'Hello world!'
}
