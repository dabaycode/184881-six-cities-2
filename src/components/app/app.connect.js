import {connect} from 'react-redux';
import ActionCreator from './actions';
import App from './app';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.app.city,
  placeCards: state.app.offers,
  sortType: state.app.sortType,
  activeCard: state.app.activeCard
});

const mapDispatchToProps = (dispatch) => ({
  cityFilterClickHandler: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },

  optionsClickHandler: (option) => {
    dispatch(ActionCreator.changeSortType(option));
  },

  cardHoverHandler: (card) => {
    dispatch(ActionCreator.setActiveCard(card));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
