import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardMark from './place-card-mark';

it(`Place card mark correctly renders with mark`, () => {
  const tree = renderer.create(< PlaceCardMark title = {
    `Premium`
  } />).toJSON();
  expect(tree).toMatchSnapshot();
});
