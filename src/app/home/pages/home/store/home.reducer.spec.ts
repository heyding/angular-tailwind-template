import { homeReducer, initialState } from './home.reducer';

describe('Home Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = homeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
