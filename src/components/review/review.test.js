import renderer from 'react-test-renderer';
import Review from '../review/review';

it(`Review correctly renders with data`, () => {

  const review = {
    user: {
      photo: `/img/apartment-02.jpg`,
      name: `Max`
    },
    rating: 72,
    text: `Great place!`,
    date: `2019-07-12`
  };

  const {user, rating, text, date} = review;

  const tree = renderer
    .create(<Review user={user} rating={rating} text={text} date={date}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
