import * as fromHome from './home.reducer';
import { selectHomeState } from './home.selectors';

describe('Home Selectors', () => {
  it('should select the feature state', () => {
    const result = selectHomeState({
      [fromHome.homeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
