import {connect} from 'react-redux';
import CitiesList from './cities-list';
import * as ActionCreator from '../app/actions';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeItem: state.app.city,
  cities: state.app.actualCities
});

const mapDispatchToProps = (dispatch) => ({
  cityFilterClickHandler: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch((...args) => ActionCreator.getOffers(...args));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
