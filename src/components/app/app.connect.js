import {connect} from 'react-redux';
import ActionCreator from './actions';
import App from './app';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.app.city,
  placeCards: state.app.offers,
  sortType: state.app.sortType
});

const mapDispatchToProps = (dispatch) => ({
  cityFilterClickHandler: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },

  optionsClickHandler: (option) => {
    dispatch(ActionCreator.changeSortType(option));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
