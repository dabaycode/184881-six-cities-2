import PlaceCardList from '../place-card-list/place-card-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import PlacesOptionList from '../places-option-list/places-option-list';
import withActiveItem from '../../hocs/withActiveItem';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOptionsOpen: false
    };

    this._toggleSortOptions = this
      ._toggleSortOptions
      .bind(this);

    this.OptionList = withActiveItem(PlacesOptionList);
    this.PlaceCardList = withActiveItem(PlaceCardList);
    this.Map = withActiveItem(Map);
    this.CitiesList = withActiveItem(CitiesList);

  }

  componentDidMount() {
    const {currentCity, onCityFilterClick} = this.props;

    onCityFilterClick(currentCity);
  }

  _toggleSortOptions() {
    this.setState({
      isOptionsOpen: !this.state.isOptionsOpen
    });
  }

  render() {
    const {
      currentCity,
      cities,
      placeCards,
      sortType,
      activeCard,
      onCityFilterClick,
      onOprionsSortClick,
      availableSorts,
      onCardHover
    } = this.props;

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
              <this.CitiesList
                activeItem={currentCity}
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
                  <span className="places__sorting-caption">Sort by
                  </span>
                  <span
                    className="places__sorting-type"
                    tabIndex="0"
                    onClick={this._toggleSortOptions}>
                    {sortType}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  {
                    <this.OptionList
                      isOpen = {
                        this.state.isOptionsOpen
                      }
                      onItemClick = {
                        onOprionsSortClick
                      }
                      availableSorts = {
                        availableSorts
                      }
                      activeItem = {
                        availableSorts[0]
                      }/>
                  }
                </form>
                <this.PlaceCardList
                  sort={sortType}
                  cards={placeCards}
                  onCardHover={onCardHover}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <this.Map cards={placeCards} hoveredCard={activeCard}/>
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
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
  sortType: PropTypes.string.isRequired,
  onCityFilterClick: PropTypes.func.isRequired,
  onOprionsSortClick: PropTypes.func.isRequired,
  availableSorts: PropTypes.arrayOf(PropTypes.string.isRequired),
  activeCard: PropTypes.object,
  onCardHover: PropTypes.func.isRequired,
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
  }))
};

export default Main;
