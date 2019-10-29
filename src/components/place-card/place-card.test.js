import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';

it(`Place card correctly renders with 1 apartment for rent after relaunch`, () => {
  const tree = renderer
    .create(<PlaceCard
      id={1}
      title={`Beautiful & luxurious apartment at great location`}
      image={`img/apartment-01.jpg`}
      price={80}
      rating={13}
      type={`Private room`}
      mark={`Premium`}
      onCardHover={() => {}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
