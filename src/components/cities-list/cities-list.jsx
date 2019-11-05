const CitiesList = (props) => {
  const {cities, currentCity, onCityFilterClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => {
        return (
          <li className="locations__item" key={`city-` + item}>
            <a
              className={`locations__item-link tabs__item ` + (item === currentCity && `tabs__item--active`)}
              href="#"
              onClick={() => {
              onCityFilterClick(item)
            }}>
              <span>{item}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default CitiesList;

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
  currentCity: PropTypes.string,
};
