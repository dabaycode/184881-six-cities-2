import Review from '../review/review';

const ReviewsList = (props) => {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((item) => {
        const {user, rating, text, date} = item;
        return (<Review
          user={user}
          rating={rating}
          text={text}
          date={date}
          key={`review-` + rating + text + date}/>);
      })}
    </ul>

  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({name: PropTypes.string.isRequired, photo: PropTypes.string.isRequired}),
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }))
};
