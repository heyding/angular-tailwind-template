import * as fromHome from './home.actions';

describe('loadHomes', () => {
  it('should return an action', () => {
    expect(fromHome.loadData().type).toBe('[HOME] LOAD DATA');
  });
});
