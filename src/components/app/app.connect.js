import {connect} from 'react-redux';
import * as ActionCreator from './actions';
import App from './app';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => dispatch((...args) => ActionCreator.init(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
