import {connect} from 'react-redux';
import ReviewsForm from './reviews-form';
import * as ActionCreator from './actions';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  // card: state.app.ActiveCard,
});

const mapDispatchToProps = (dispatch) => ({
  sendComment: (hotelId, data) => dispatch((...args) => ActionCreator.sendComment(...args, hotelId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);

