import {connect} from 'react-redux';
import Map from './map';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cards: state.app.offers,
  hoveredCard: state.app.activeCard,
});


export default connect(mapStateToProps)(Map);
