import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardDetail from './place-card-detail';

it(`Place card detail correctly renders with apartment data after relaunch`, () => {
  const tree = renderer
    .create(<PlaceCardDetail
      title={`Beautiful & luxurious apartment at great location`}
      image={`/img/apartment-01.jpg`}
      price={80}
      rating={13}
      type={`Private room`}
      mark={`Premium`}
      offerProperties={{
        entire: `Entire place`,
        bedrooms: 3,
        adults: 4,
        options: [
          `Wi-Fi`,
          `Heating`,
          `Kitchen`,
          `Fridge`,
          `Washing machine`,
          `Coffee machine`,
          `Dishwasher`,
          `Towels`
        ]
      }}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
