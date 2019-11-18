import Main from '../main/main';
import PlaceCardDetail from '../place-card-detail/place-card-detail';
import {findCardById} from '../../utils';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadOffers();
  }

  _getPageScreen() {

    const {
      user,
      city,
      placeCards,
      initOffers,
      actualCities,
      availableSorts,
      activeCard,
      sortType,
      cityFilterClickHandler,
      optionsClickHandler,
      cardHoverHandler,
      isAuthorizationRequired
    } = this.props;

    const url = location
      .pathname
      .split(`/`);

    switch (url[1]) {
      case `offer`:
        if (/\d+/.test(url[2])) {

          const currentCard = findCardById(+url[2], initOffers);

          if (currentCard) {

            const {
              title,
              image,
              images,
              price,
              rating,
              type,
              mark,
              properties,
              reviews,
              near
            } = currentCard;
            const nearCards = [];

            near.forEach((id) => {
              nearCards.push(findCardById(id, placeCards));
            });

            return (<PlaceCardDetail
              title={title}
              image={image}
              images={images}
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
        return (<Main
          activeCard={activeCard}
          placeCards={placeCards}
          currentCity={city}
          cities={actualCities}
          onCityFilterClick={cityFilterClickHandler}
          onOprionsSortClick={optionsClickHandler}
          availableSorts={availableSorts}
          sortType={sortType}
          onCardHover={cardHoverHandler}
          isAuthorizationRequired={isAuthorizationRequired}
          user={user}/>);
    }

    return null;
  }

  render() {
    return (
    <> { this._getPageScreen() } </>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  city: PropTypes.string.isRequired,
  actualCities: PropTypes.arrayOf(PropTypes.string.isRequired),
  activeCard: PropTypes.object,
  loadOffers: PropTypes.func,
  initOffers: PropTypes.arrayOf(PropTypes.shape({
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
  availableSorts: PropTypes.arrayOf(PropTypes.string.isRequired),
  sortType: PropTypes.string.isRequired,
  cityFilterClickHandler: PropTypes.func.isRequired,
  optionsClickHandler: PropTypes.func.isRequired,
  cardHoverHandler: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired
};

export default App;
