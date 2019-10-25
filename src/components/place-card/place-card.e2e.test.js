import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

Enzyme.configure({adapter: new Adapter()});

const mockCard = {
  title: `Beautiful & luxurious apartment at great location`,
  image: `img/apartment-01.jpg`,
  price: 80,
  rating: 13,
  type: `Private room`,
  mark: `Premium`
};

expect.extend({
  toBeCorrectIncomeData(data) {

    let pass = false;

    if (data) {
      pass = false;
    } else {
      pass = false;
    }

    if (pass) {
      return {
        message: () => `Data is correct`,
        pass: true
      };
    } else {
      return {
        message: () => `Data is not correct`,
        pass: false
      };
    }
  }
});

it(`Heandler run when place card on hover`, () => {
  const hoverHandler = jest.fn((card) => {
    return card;
  });

  const placeOfferCard = shallow(<PlaceCard
    title={mockCard.title}
    image={mockCard.image}
    price={mockCard.price}
    rating={mockCard.rating}
    type={mockCard.type}
    mark={mockCard.mark}
    onCardHover={() => hoverHandler(mockCard)}/>);
  const card = placeOfferCard.find(`.place-card`);
  card.simulate(`mouseover`);
  expect(hoverHandler).toBeCorrectIncomeData(mockCard);
});
