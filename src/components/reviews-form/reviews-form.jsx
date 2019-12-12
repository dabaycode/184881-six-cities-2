class ReviewsForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      comment: ``,
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.sendComment(this.props.id, this.state).then(() => {
      this.setState({
        rating: 0,
        comment: ``,
      });
    });
  }

  handleCheckboxChange(e) {
    const ratingValue = e.target.value;
    this.setState((prevState) => ({...prevState, rating: +ratingValue}));
  }

  handleTextareaChange(e) {
    const commentValue = e.target.value;
    this.setState((prevState) => ({...prevState, comment: commentValue}));
  }

  render() {
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={5}
            id="5-stars"
            type="radio"
            checked={this.state.rating === 5}
            onChange={this.handleCheckboxChange}/>
          <label
            htmlFor="5-stars"
            className="reviews__rating-label form__rating-label"
            title="perfect">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={4}
            id="4-stars"
            type="radio"
            checked={this.state.rating === 4}
            onChange={this.handleCheckboxChange}/>
          <label
            htmlFor="4-stars"
            className="reviews__rating-label form__rating-label"
            title="good">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={3}
            id="3-stars"
            type="radio"
            checked={this.state.rating === 3}
            onChange={this.handleCheckboxChange}/>
          <label
            htmlFor="3-stars"
            className="reviews__rating-label form__rating-label"
            title="not bad">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={2}
            id="2-stars"
            type="radio"
            checked={this.state.rating === 2}
            onChange={this.handleCheckboxChange}/>
          <label
            htmlFor="2-stars"
            className="reviews__rating-label form__rating-label"
            title="badly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={1}
            id="1-star"
            type="radio"
            checked={this.state.rating === 1}
            onChange={this.handleCheckboxChange}/>
          <label
            htmlFor="1-star"
            className="reviews__rating-label form__rating-label"
            title="terribly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={this.state.comment}
          onChange={this.handleTextareaChange}/>

        <div className="reviews__button-wrapper">
          <p className="reviews__help">
                    To submit review please make sure to set
            <span className="reviews__star">rating</span>
                    and describe your stay with at least
            <b className="reviews__text-amount"> 50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={!(this.state.comment && this.state.rating)}>Submit</button>
        </div>
      </form>
    );
  }
}

export default ReviewsForm;


ReviewsForm.propTypes = {
  id: PropTypes.number.isRequired,
  sendComment: PropTypes.func.isRequired,
};
