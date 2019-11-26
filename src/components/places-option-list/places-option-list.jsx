import withActiveItem from '../../hocs/withActiveItem';

class PlacesOptionList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {isOpen, activeItem, availableSorts, optionsClickHandler, onSelectActiveElement} = this.props;

    return (
      <ul
        className={`places__options places__options--custom ` + (isOpen && `places__options--opened`)}>
        {availableSorts.map((item) => {
          return (
            <li
              className={`places__option ` + ((activeItem === item) && `places__option--active`)}
              tabIndex="0"
              onClick={() => {
                optionsClickHandler(item);
                onSelectActiveElement(item);
              }}
              key={`sort-` + item}>{item}</li>
          );
        })}
      </ul>
    );
  }
}

export default withActiveItem(PlacesOptionList);

PlacesOptionList.propTypes = {
  onSelectActiveElement: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  availableSorts: PropTypes.arrayOf(PropTypes.string.isRequired),
  isOpen: PropTypes.bool,
  optionsClickHandler: PropTypes.func.isRequired,
};

