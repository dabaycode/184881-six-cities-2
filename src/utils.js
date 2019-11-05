const findCardById = (id, cards) => {
  const card = cards.find((item) => {
    return item.id === (id);
  });

  return card;
};

const findOffersByCity = (city, offers) => {
  return offers.filter((item) => {
    return item.city === city;
  });
};

const getActualCities = (offers) => {
  let cities = [];

  offers.forEach((item) => {
    cities.push(item.city);
  });

  let allCities = cities.filter((item, index) => {
    return cities.indexOf(item) === index;
  });

  return allCities.slice(0, 6);
}

export {findCardById, findOffersByCity, getActualCities};
