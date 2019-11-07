import initialState from '../../initialState';

export default {
  changeCity: (city) => ({type: `CHANGE_CITY`, payload: city}),

  getOffers: (city) => ({
    type: `GET_OFFERS`,
    payload: initialState
      .offers
      .filter((item) => item.city === city)
  }),

  changeSortType: (option) => ({type: `CHANGE_SORT_TYPE`, payload: option})
};
