import React from 'react';
import PropTypes from 'prop-types';
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

  render() {
    const {cards} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {cards.map((item, index) => <PlaceCard
          key={item.title + index}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          type={item.type}
          mark={item.mark}
          onCardHover={() => this.cardHoverHanler(item)}/>)}
      </div>
    );

  }
}

export default PlaceCardList;

PlaceCardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired
  }))
};
