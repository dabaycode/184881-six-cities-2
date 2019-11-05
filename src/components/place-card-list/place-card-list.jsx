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
  }

  cardHoverOutHanler() {
    this.setState({hoveredCard: null});
  }

  render() {
    const {cards, isNear} = this.props;

    return (
      <div
        className={isNear ? `near-places__list` : `cities__places-list` + ` places__list tabs__content`}>
        {cards.map((item) => {

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
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired
  })),
  isNear: PropTypes.bool
};
