import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import mockCards from '../../mocks/offers';

it(`Main screen correctly renders with mock apartments for rent after relaunch`, () => {
  const tree = renderer
    .create(<Main placeCards={mockCards}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
