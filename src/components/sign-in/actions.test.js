import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {login} from './actions';

describe(`SigIn actions creator work correctly`, () => {

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(axios);
    const dispatch = jest.fn();
    const getState = jest.fn();

    apiMock.onPost(`/login`)
      .reply(200, {email: `test@test.ru`});

    login({login: `test@test.ru`, password: `test`}, dispatch, getState, axios).then(() => {
      expect(dispatch).toBeCalledTimes(2);
    });
  });
});

