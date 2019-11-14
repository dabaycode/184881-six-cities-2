import {INITIAL_STATE} from './reducer';
import dataAdapter from './data-adapter';
import {getActualCities} from '../../utils';

export const changeCity = (city) => ({type: `CHANGE_CITY`, payload: city});

export const getOffers = (dispatch, getState) => {
  dispatch ({
    type: `CHANGE_OFFERS`,
    payload: getState()
      .app
      .initOffers
      .filter((item) => item.city === getState().app.city)
  });
};

export const changeSortType = (option) => ({type: `CHANGE_SORT_TYPE`, payload: option});

export const setActiveCard = (card) => ({type: `SET_ACTIVE_CARD`, payload: card});

export const init = (dispatch, getState, api) => {
  api
    .get(`/hotels`)
    .then((respond) => {
      const offers = dataAdapter(respond.data);
      const cities = getActualCities(offers);

      dispatch({type: `SET_INIT_OFFERS`, payload: offers});
      dispatch({type: `CHANGE_ACTUAL_CITIES`, payload: cities});
      dispatch(changeCity(cities[0]));
      getOffers(dispatch, getState);
    });
};
