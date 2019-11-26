import {connect} from 'react-redux';
import PlaceCard from './place-card';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.app.isAuthorizationRequired,
});

export default connect(mapStateToProps)(PlaceCard);
