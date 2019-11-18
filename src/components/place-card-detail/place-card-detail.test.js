import renderer from 'react-test-renderer';
import PlaceCardDetail from './place-card-detail';

it(`Place card detail correctly renders with apartment data after relaunch`, () => {
  const tree = renderer
    .create(<PlaceCardDetail
      id={1}
      title={`Beautiful & luxurious apartment at great location`}
      image={`/img/apartment-01.jpg`}
      price={80}
      rating={13}
      type={`Private room`}
      mark={`Premium`}
      images={[`/img/apartment-01.jpg`]}
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
      }}
      reviews={[{
        user: {
          photo: `/img/apartment-02.jpg`,
          name: `Max`
        },
        rating: 72,
        text: `Great place!`,
        date: `2019-07-12`
      }]}
      nearCards={[{
        id: 4,
        title: `Nice, cozy, warm big bed apartment`,
        image: `/img/apartment-01.jpg`,
        price: 60,
        rating: 90,
        type: `Private room`,
        mark: ``,
        coordinates: [
          52.3809553943508, 4.939309666406198
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
            `Towels`,
            `Baby seat`,
            `Cabel TV`
          ]
        },
        reviews: [
          {
            user: {
              photo: `/img/apartment-02.jpg`,
              name: `Max`
            },
            rating: 72,
            text: `Great place!`,
            date: `2019-07-12`
          }
        ],
        near: [1, 3]
      }]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
