import appReducer, {INITIAL_STATE} from './reducer';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {init} from './actions';
import mockOffers from '../../mocks/offers';

describe(`App reducer work correctly`, () => {
  it(`App reducer without additional parameters should return initial state`, () => {
    expect(appReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it(`App reducer with city parameter should change state city`, () => {
    expect(appReducer(INITIAL_STATE, {type: `CHANGE_CITY`, payload: `Moscow`})).toEqual({...INITIAL_STATE, city: `Moscow`});
  });

  it(`App reducer with offers parameter should change state offers`, () => {
    expect(appReducer(INITIAL_STATE, {type: `CHANGE_OFFERS`, payload: [`test`]})).toEqual({...INITIAL_STATE, offers: [`test`]});
  });

  it(`App reducer with sort parameter should change state sort type`, () => {
    expect(appReducer(INITIAL_STATE, {type: `CHANGE_SORT_TYPE`, payload: `test`})).toEqual({...INITIAL_STATE, sortType: `test`});
  });

  it(`App reducer with reset type should reset state`, () => {
    expect(appReducer(INITIAL_STATE, {type: `RESET`, payload: `test`})).toEqual(INITIAL_STATE);
  });


  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(axios);
    const dispatch = jest.fn();
    const getState = jest.fn();

    apiMock.onGet(`/hotels`)
    .reply(200, [mockOffers[0]]);

    init(dispatch, getState, axios).then(() => {
      expect(dispatch).toBeCalledTimes(4);
    });
  });
});
