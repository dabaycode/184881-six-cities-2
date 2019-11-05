import renderer from 'react-test-renderer';
import CitiesList from './cities-list';

it(`Cities list correctly renders with mock cities after relaunch`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={[`Amsterdam`, `Moscow`]}
      currentCity={`Moscow`}
      onCityFilterClick={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
