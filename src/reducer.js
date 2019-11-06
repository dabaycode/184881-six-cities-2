import mockOffers from './mocks/offers';

const initialState = {
  city: `Amsterdam`,
  sortType: `Popular`,
  offers: mockOffers
};

const ActionCreator = {
  changeCity: (city) => ({type: `CHANGE_CITY`, payload: city}),

  getOffers: (city) => ({
    type: `GET_OFFERS`,
    payload: initialState
      .offers
      .filter((item) => item.city === city)
  }),

  changeSortType: (option) => ({type: `CHANGE_SORT_TYPE`, payload: option}),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {city: action.payload});

    case `GET_OFFERS`:
      return Object.assign({}, state, {offers: action.payload});

    case `CHANGE_SORT_TYPE`:
      return Object.assign({}, state, {sortType: action.payload});

    case `RESET`:
      return Object.assign({}, initialState);
  }

  return state;
};

export {reducer, ActionCreator};