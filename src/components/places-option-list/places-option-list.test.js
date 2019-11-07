import renderer from 'react-test-renderer';
import PlacesOptionList from './places-option-list';

it(`Places option list correctly renders with data`, () => {
  const tree = renderer
    .create(<PlacesOptionList
      isOpen={true}
      availableSorts={[`Popular`, `New`]}
      onItemClick={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
