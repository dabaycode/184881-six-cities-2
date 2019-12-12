import {connect} from 'react-redux';
import PlaceCard from './place-card';
import * as AppActionCreator from '../app/actions';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.app.isAuthorizationRequired,
  // isFavorite: state.app.initOffers.find((item) => item.id === ownProps.id).isFavorite,
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatus: (hotelId, status) => dispatch((...args) => AppActionCreator.changeFavoriteStatus(...args, hotelId, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
