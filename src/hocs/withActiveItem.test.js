import renderer from 'react-test-renderer';
import withActiveItem from './withActiveItem';
import PlaceCardList from '../components/place-card-list';
import mockCards from '../../mocks/offers';

it(`withActiveItem correctly render the place card list element`, () => {

  const PlaceCardsTest = withActiveItem(PlaceCardList);

  const tree = renderer
    .create(<PlaceCardsTest cards={mockCards} onCardHover={jest.fn()} sort={`Popular`}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
