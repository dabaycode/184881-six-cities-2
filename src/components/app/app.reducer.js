import initialState from '../../initialState';

export default (state = initialState, action) => {
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
