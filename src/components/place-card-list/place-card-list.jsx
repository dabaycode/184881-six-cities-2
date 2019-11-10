import PlaceCard from '../place-card/place-card';

class PlaceCardList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null
    };
  }

  cardHoverHanler(card) {
    this.setState({hoveredCard: card});
    this
      .props
      .onCardHover(card.id);
  }

  cardHoverOutHanler() {
    this.setState({hoveredCard: null});
    this
      .props
      .onCardHover(null);
  }

  _sortCards(type, cards) {
    switch (type) {
      case `Popular`:
        return cards;
      case `Price: low to high`:
        return cards.sort((a, b) => a.price > b.price
          ? 1
          : -1);
      case `Price: high to low`:
        return cards.sort((a, b) => a.price < b.price
          ? 1
          : -1);
      case `Top rated first`:
        return cards.sort((a, b) => a.rating < b.rating
          ? 1
          : -1);
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
              onCardHover={() => this.cardHoverHanler(item)}
              onCardHoverOut={() => this.cardHoverOutHanler()}/>);
          })}
      </div>
    );

  }
}

export default PlaceCardList;

PlaceCardList.propTypes = {
  cards: PropTypes.array.isRequired,
  isNear: PropTypes.bool,
  onCardHover: PropTypes.func,
  sort: PropTypes.string,
};
