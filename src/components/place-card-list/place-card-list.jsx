import PlaceCard from '../place-card/place-card';
import withActiveItem from '../../hocs/withActiveItem';

class PlaceCardList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  cardHoverHandler(card) {
    this.props.onCardHover(card);
    this.props.onSelectActiveElement(card);
  }

  _sortCards(type, cards) {
    switch (type) {
      case `Popular`:
        return cards;
      case `Price: low to high`:
        return cards.sort((a, b) => a.price - b.price);
      case `Price: high to low`:
        return cards.sort((a, b) => b.price - a.price);
      case `Top rated first`:
        return cards.sort((a, b) => b.rating - a.rating);
    }

    return cards;
  }

  render() {
    const {cards, sort, isNear} = this.props;

    return (
      <div
        className={isNear
          ? `near-places__list`
          : `cities__places-list` + ` places__list tabs__content`}>
        {this
          ._sortCards(sort, cards)
          .map((item) => {

            const {
              id,
              title,
              image,
              price,
              rating,
              type,
              mark
            } = item;

            return (<PlaceCard
              key={`offerCard-` + id}
              id={id}
              title={title}
              image={image}
              price={price}
              rating={rating}
              type={type}
              mark={mark}
              isNear={isNear}
              onCardHover={() => this.cardHoverHandler(item)}
              onCardHoverOut={() => this.cardHoverHandler(null)}/>);
          })}
      </div>
    );

  }
}

export default withActiveItem(PlaceCardList);

PlaceCardList.propTypes = {
  cards: PropTypes.array.isRequired,
  onSelectActiveElement: PropTypes.func.isRequired,
  isNear: PropTypes.bool,
  onCardHover: PropTypes.func,
  sort: PropTypes.string,
};
