import {INITIAL_STATE} from './reducer';

export default {
  changeCity: (city) => ({type: `CHANGE_CITY`, payload: city}),

  getOffers: (city) => ({
    type: `GET_OFFERS`,
    payload: INITIAL_STATE
      .offers
      .filter((item) => item.city === city)
  }),

  changeSortType: (option) => ({type: `CHANGE_SORT_TYPE`, payload: option})
};
