import renderer from 'react-test-renderer';
import ReviewsList from '../reviews-list/reviews-list';

it(`Reviews list correctly renders with 2 reviews`, () => {

  const reviews = [
    {
      user: {
        photo: `/img/apartment-02.jpg`,
        name: `Max`
      },
      rating: 72,
      text: `Great place!`,
      date: `2019-07-12`
    }, {
      user: {
        photo: `/img/apartment-01.jpg`,
        name: `John`
      },
      rating: 23,
      text: `Not great place!`,
      date: `2019-07-10`
    }
  ];
  const tree = renderer
    .create(<ReviewsList reviews={reviews}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
