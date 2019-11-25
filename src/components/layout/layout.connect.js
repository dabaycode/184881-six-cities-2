import {connect} from 'react-redux';
import Layout from './layout';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.app.isAuthorizationRequired,
  user: state.app.user,
});

export default connect(mapStateToProps)(Layout);
