import PlaceCardList from '../place-card-list/place-card-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {currentCity, onCityFilterClick} = this.props;
    
    onCityFilterClick(currentCity);
 }

  render() {
    const {currentCity, cities, placeCards, onCityFilterClick} = this.props;

    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList
                currentCity={currentCity}
                cities={cities}
                onCityFilterClick={onCityFilterClick}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{[placeCards.length, ` `]} 
                  places to stay in {[` `, currentCity]}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <PlaceCardList cards={placeCards}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map cards={placeCards}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );

  }
}

Main.propTypes = {
  currentCity: PropTypes.string.isRequired,
  actualCities: PropTypes.arrayOf(PropTypes.string.isRequired),
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

export default Main;
