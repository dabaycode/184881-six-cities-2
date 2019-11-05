import ReviewsList from '../reviews-list/reviews-list';
import PlaceCardList from '../place-card-list/place-card-list';
import Map from '../map/map';

const PlaceCardDetail = (props) => {
  const {
    title,
    image,
    price,
    rating,
    mark,
    reviews,
    nearCards,
    offerProperties
  } = props;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src={image} alt="Photo studio"/>
            </div>
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {mark && <div className="property__mark">
              <span>{mark}</span>
            </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{
                  width: rating + `%`
                }}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{(rating / 100 * 5).toFixed(1)}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offerProperties.entire}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offerProperties.bedrooms + ` `}
                Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offerProperties.adults + ` `}
                adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">

                {offerProperties
                  .options
                  .map((item, index) => {
                    return (
                      <li className="property__inside-item" key={item + index}>
                        {item}
                      </li>
                    );
                  })}

              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div
                  className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src="/img/avatar-angelina.jpg"
                    width={74}
                    height={74}
                    alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  Angelina
                </span>
                <span className="property__user-status">
                  Pro
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness
                  of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National
                  Opera, but where the bustle of the city comes to rest in this alley flowery and
                  colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews ·
                <span className="reviews__amount">{reviews.length}</span>
              </h2>
              <ReviewsList reviews={reviews}/>
              <form className="reviews__form form" action="#" method="post">
                <label className="reviews__label form__label" htmlFor="review">Your review</label>
                <div className="reviews__rating-form form__rating">
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    defaultValue={5}
                    id="5-stars"
                    type="radio"/>
                  <label
                    htmlFor="5-stars"
                    className="reviews__rating-label form__rating-label"
                    title="perfect">
                    <svg className="form__star-image" width={37} height={33}>
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    defaultValue={4}
                    id="4-stars"
                    type="radio"/>
                  <label
                    htmlFor="4-stars"
                    className="reviews__rating-label form__rating-label"
                    title="good">
                    <svg className="form__star-image" width={37} height={33}>
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    defaultValue={3}
                    id="3-stars"
                    type="radio"/>
                  <label
                    htmlFor="3-stars"
                    className="reviews__rating-label form__rating-label"
                    title="not bad">
                    <svg className="form__star-image" width={37} height={33}>
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    defaultValue={2}
                    id="2-stars"
                    type="radio"/>
                  <label
                    htmlFor="2-stars"
                    className="reviews__rating-label form__rating-label"
                    title="badly">
                    <svg className="form__star-image" width={37} height={33}>
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    defaultValue={1}
                    id="1-star"
                    type="radio"/>
                  <label
                    htmlFor="1-star"
                    className="reviews__rating-label form__rating-label"
                    title="terribly">
                    <svg className="form__star-image" width={37} height={33}>
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                </div>
                <textarea
                  className="reviews__textarea form__textarea"
                  id="review"
                  name="review"
                  placeholder="Tell how was your stay, what you like and what can be improved"
                  defaultValue={``}/>
                <div className="reviews__button-wrapper">
                  <p className="reviews__help">
                    To submit review please make sure to set
                    <span className="reviews__star">rating</span>
                    and describe your stay with at least
                    <b className="reviews__text-amount">50 characters</b>.
                  </p>
                  <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map cards={nearCards}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlaceCardList cards={nearCards} isNear={true}/>
        </section>
      </div>
    </main>

  );
};

PlaceCardDetail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  mark: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({name: PropTypes.string.isRequired, photo: PropTypes.string.isRequired}),
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })),
  nearCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    isNear: PropTypes.bool
  })),
  offerProperties: PropTypes.shape({
    entire: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired)
  })
};

export default PlaceCardDetail;
