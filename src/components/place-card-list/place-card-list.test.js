import renderer from 'react-test-renderer';
import PlaceCardList from './place-card-list';

it(`Place card list correctly renders with 2 cards`, () => {
  const tree = renderer.create(< PlaceCardList cards = {
    [
      {
        id: 1,
        title: `Beautiful & luxurious apartment at great location`,
        image: `img/apartment-01.jpg`,
        price: 80,
        rating: 13,
        type: `Private room`,
        mark: `Premium`
      }, {
        id: 2,
        title: `Wood and stone place`,
        image: `img/apartment-02.jpg`,
        price: 180,
        rating: 45,
        type: `Private room`,
        mark: `Premium`
      }
    ]
  } />).toJSON();
  expect(tree).toMatchSnapshot();
});
