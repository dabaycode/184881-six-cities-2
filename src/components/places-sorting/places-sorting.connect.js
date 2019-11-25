import {connect} from 'react-redux';
import PlacesSorting from './places-sorting';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  sortType: state.app.sortType,
});


export default connect(mapStateToProps)(PlacesSorting);
