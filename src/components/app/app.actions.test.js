import appActions from './app.actions';
import initialState from '../../initialState';

describe(`App actions creator work correctly`, () => {
  it(`App actions creator return change city type when city was changed`, () => {
    expect(appActions.changeCity(`Moscow`)).toEqual({type: `CHANGE_CITY`, payload: `Moscow`});
  });

  it(`App actions creator return get offers type with offers in city when city was changed`, () => {
    expect(appActions.getOffers(`Amsterdam`)).toEqual({
      type: `GET_OFFERS`,
      payload: initialState
        .offers
        .filter((item) => item.city === `Amsterdam`)
    });
  });

  it(`App actions creator return change sort type with sort type when sort type was changed`, () => {
    expect(appActions.changeSortType(`Popular`)).toEqual({type: `CHANGE_SORT_TYPE`, payload: `Popular`});
  });
});
