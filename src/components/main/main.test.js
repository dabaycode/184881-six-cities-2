import React from 'react';
import renderer from 'react-test-renderer';
import Main from "./main";

it(`Main screen correctly renders with 1 apartment for rent after relaunch`, () => {
  const tree = renderer
    .create(<Main rentList={[`Beautiful & luxurious apartment at great location`]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
