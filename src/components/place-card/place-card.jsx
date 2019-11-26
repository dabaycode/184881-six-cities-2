import withAuthReqiure from '../../hocs/withAuthRequire';

class PlaceCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isCardFavorite: this.props.isFavorite,
    };

    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  _favoriteClickHandler() {

    this.setState((prevState) => ({
      isCardFavorite: !prevState.isCardFavorite
    }));

    this.props.onClickToAuthRequire(this.props.isAuthorizationRequired);
  }

  render() {

    const {
      id,
      title,
      image,
      price,
      rating,
      type,
      mark,
      isNear,
      onCardHover,
      onCardHoverOut
    } = this.props;

    return (
      <article className={isNear ? `near-places__card` : `cities__place-card` + ` place-card`} onMouseOver={onCardHover} onMouseOut={onCardHoverOut}>
        {mark && !isNear && <div className="place-card__mark">
          <span>{mark}</span>
        </div>}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src={image}
              width="260"
              height="200"
              alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ` + (this.state.isCardFavorite && `place-card__bookmark-button--active`)} type="button" onClick={this._favoriteClickHandler}>
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{
                width: rating + `%`
              }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href={`/offer/` + id}>{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );

  }

}

PlaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  mark: PropTypes.string.isRequired,
  isNear: PropTypes.bool,
  onCardHover: PropTypes.func.isRequired,
  onCardHoverOut: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onClickToAuthRequire: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export default withAuthReqiure(PlaceCard);
