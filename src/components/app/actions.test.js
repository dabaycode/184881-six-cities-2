import {changeCity, changeSortType} from './actions';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {init} from './actions';
import mockOffers from '../../mocks/offers';

describe(`App actions creator work correctly`, () => {
  it(`App actions creator return change city type when city was changed`, () => {
    expect(changeCity(`Moscow`)).toEqual({type: `CHANGE_CITY`, payload: `Moscow`});
  });

  it(`App actions creator return change sort type with sort type when sort type was changed`, () => {
    expect(changeSortType(`Popular`)).toEqual({type: `CHANGE_SORT_TYPE`, payload: `Popular`});
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
