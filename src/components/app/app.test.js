import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";

it(`App correctly renders with 1 apartment for rent after relaunch`, () => {
  const tree = renderer
    .create(<App rentList={[`Beautiful & luxurious apartment at great location`]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
