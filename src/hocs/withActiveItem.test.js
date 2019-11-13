import renderer from 'react-test-renderer';
import PlaceCardList from '../components/place-card-list/place-card-list';
import mockCards from '../mocks/offers';

it(`withActiveItem correctly render the place card list element`, () => {
  const tree = renderer
    .create(<PlaceCardList cards={mockCards} onCardHover={jest.fn()} sort={`Popular`} activeItem={`Popular`}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
