import renderer from 'react-test-renderer';
import Main from './main';
import mockCards from '../../mocks/offers';

it(`Main screen correctly renders with mock apartments for rent after relaunch`, () => {
  const tree = renderer
    .create(<Main
      user={{email: `test@test.ru`}}
      isAuthorizationRequired={false}
      placeCards={mockCards}
      currentCity={`Amsterdam`}
      cities={[`Amsterdam`, `London`]}
      sortType={`Popular`}
      onCityFilterClick={jest.fn()}
      onOprionsSortClick={jest.fn()}
      availableSorts={[`Popular`, `New`]}
      onCardHover={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
