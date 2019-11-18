const findCardById = (id, cards) => cards.find((item) => item.id === id);

const getActualCities = (offers) => {
  const cities = [];

  offers.forEach((item) => {
    cities.push(item.city);
  });

  let uniqCities = cities.filter((item, index) => cities.indexOf(item) === index);

  return uniqCities.slice(0, 6);
};

export {findCardById, getActualCities};
