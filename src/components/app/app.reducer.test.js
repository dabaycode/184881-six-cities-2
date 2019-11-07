import appReducer from './app.reducer';
import mockOffers from '../../mocks/offers';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appReducer(undefined, {})).toEqual({city: `Amsterdam`, sortType: `Popular`, offers: mockOffers});
  });
});
