import appReducer from './app.reducer';
import mockOffers from '../../mocks/offers';
import initialState from '../../initialState';

const testOffers = mockOffers.push(`test`);

describe(`App reducer work correctly`, () => {
  it(`App reducer without additional parameters should return initial state`, () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it(`App reducer with city parameter should change state city`, () => {
    expect(appReducer(initialState, {type: `CHANGE_CITY`, payload: `Moscow`})).toEqual({...initialState, city: `Moscow`});
  });

  it(`App reducer with offers parameter should change state offers`, () => {
    expect(appReducer(initialState, {type: `GET_OFFERS`, payload: testOffers})).toEqual({...initialState, offers: testOffers});
  });

  it(`App reducer with sort parameter should change state sort type`, () => {
    expect(appReducer(initialState, {type: `CHANGE_SORT_TYPE`, payload: `test`})).toEqual({...initialState, sortType: `test`});
  });

  it(`App reducer with reset type should reset state`, () => {
    expect(appReducer(initialState, {type: `RESET`, payload: `test`})).toEqual(initialState);
  });

});
