import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";
import mockCards from '../../mocks/offers';

it(`App correctly renders with mock apartments for rent after relaunch`, () => {
  const tree = renderer
    .create(<App placeCards={mockCards} onClickHead={() => {}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
