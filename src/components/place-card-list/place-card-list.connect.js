import {connect} from 'react-redux';
import PlaceCardList from './place-card-list';
import * as ActionCreator from './actions';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cards: state.app.offers,
  sort: state.app.sortType,
});


const mapDispatchToProps = (dispatch) => ({
  onCardHover: (card) => {
    dispatch(ActionCreator.setActiveCard(card));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaceCardList);
