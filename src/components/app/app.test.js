import renderer from 'react-test-renderer';
import App from "./app";
import mockCards from '../../mocks/offers';

it(`App correctly renders with mock apartments for rent after relaunch`, () => {
  const tree = renderer
    .create(<App
      user={{email: `test@test.ru`}}
      isAuthorizationRequired={false}
      placeCards={mockCards}
      cityFilterClickHandler={jest.fn()}
      city={`Amsterdam`}
      actualCities={[`Amsterdam`, `Moscow`]}
      availableSorts={[`Popular`, `New`]}
      sortType={`Popular`}
      optionsClickHandler={jest.fn()}
      cardHoverHandler={jest.fn()}
      loadOffers={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
