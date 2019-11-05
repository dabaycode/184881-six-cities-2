import {findOffersByCity} from './utils';
import mockOffers from './mocks/offers';

const initialState = {
  city: `Amsterdam`,
  offers: mockOffers
};

const ActionCreator = {
  changeCity: (city) => ({type: `CHANGE_CITY`, payload: city}),

  getOffers: (city) => ({
    type: `GET_OFFERS`,
    payload: findOffersByCity(city, initialState.offers)
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        city: action.payload,
        offers: state.offers
      });

    case `GET_OFFERS`:
      return Object.assign({}, state, {
        city: state.city,
        offers: action.payload
      });

    case `RESET`:
      return Object.assign({}, initialState);
  }

  return state;
};

export {reducer, ActionCreator};