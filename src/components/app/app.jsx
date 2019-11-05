import Main from '../main/main';
import PlaceCardDetail from '../place-card-detail/place-card-detail';
import {findCardById} from '../../utils';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

class App extends  React.PureComponent {
  constructor(props) {
    super(props);
  }

  _getPageScreen(city, placeCards, actualCities, cityFilterClickHandler) {
  
    const url = location
      .pathname
      .split(`/`);
  
    switch (url[1]) {
      case `offer`:
        if (/\d+/.test(url[2])) {
  
          const activeCard = findCardById(+url[2], placeCards);
  
          if (activeCard) {
  
            const {title, image, price, rating, type, mark, properties, reviews, near} = activeCard;
            const nearCards = [];
  
            near.forEach((id)=> {
              nearCards.push(findCardById(id, placeCards));
            });
  
            return (<PlaceCardDetail
              title={title}
              image={image}
              price={price}
              rating={rating}
              type={type}
              mark={mark}
              reviews={reviews}
              nearCards={nearCards}
              offerProperties={properties}/>);
          }
  
          return `404`;
        }
        break;
      default:
        return (<Main placeCards={placeCards} currentCity={city} cities={actualCities} onCityFilterClick={cityFilterClickHandler}/>);
    }
  
    return null;
  }


  render() {
    const {city, placeCards, actualCities, cityFilterClickHandler} = this.props;

    return (
      <>{this._getPageScreen(city, placeCards, actualCities, cityFilterClickHandler)}</>
    );
  }
}

Main.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    near: PropTypes.arrayOf(PropTypes.number.isRequired),
    properties: PropTypes.shape({
      entire: PropTypes.string.isRequired,
      bedrooms: PropTypes.number.isRequired,
      adults: PropTypes.number.isRequired,
      options: PropTypes.arrayOf(PropTypes.string.isRequired)
    })
  })),
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  placeCards: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  cityFilterClickHandler: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
