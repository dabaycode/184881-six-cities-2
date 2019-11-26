import PlacesOptionList from '../places-option-list/places-option-list.connect';


class PlacesSorting extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isOptionsOpen: false
    };

    this._toggleSortOptions = this._toggleSortOptions.bind(this);
  }

  _toggleSortOptions() {
    this.setState((prevState) => ({
      isOptionsOpen: !prevState.isOptionsOpen
    }));
  }

  render() {

    const {sortType} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by
        </span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={this._toggleSortOptions}>
          {sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        {
          <PlacesOptionList
            isOpen = {
              this.state.isOptionsOpen
            }
            activeItem = {sortType}
          />
        }
      </form>
    );
  }
}

export default PlacesSorting;

PlacesSorting.propTypes = {
  sortType: PropTypes.string.isRequired,
};
