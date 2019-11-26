import {connect} from 'react-redux';
import * as ActionCreator from './actions';
import PlacesOptionList from './places-option-list';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  availableSorts: state.app.availableSorts,
});

const mapDispatchToProps = (dispatch) => ({
  optionsClickHandler: (option) => {
    dispatch(ActionCreator.changeSortType(option));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesOptionList);
