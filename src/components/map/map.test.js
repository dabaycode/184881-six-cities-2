import renderer from 'react-test-renderer';
import Map from './map';

it(`Map correctly renders with 1 apartment for rent after relaunch`, () => {
  const tree = renderer
    .create(<Map
      mapIconUrl={`/img/pin.svg`}
      mapIconSize={[30, 30]}
      mapZoom={12}
      mapCityCoords={[52.3909553943508, 4.85309666406198]}
      cards={[{
        id: 1,
        title: `Beautiful & luxurious apartment at great location`,
        image: `/img/apartment-01.jpg`,
        price: 80,
        rating: 13,
        type: `Private room`,
        mark: `Premium`,
        coordinates: [
          52.3909553943508, 4.85309666406198
        ],
        properties: {
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
        }
      }]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
