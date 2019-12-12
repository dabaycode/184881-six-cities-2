export const offersAdapter = (data) => {
  const newData = [];

  data.forEach((item) => {
    newData.push({
      ...item,
      image: item.preview_image,
      city: item.city.name,
      coordinates: [
        item.location.latitude, item.location.longitude
      ],
      mark: item.is_premium
        ? `Premium`
        : ``,
      properties: {
        entire: `Entire place`,
        bedrooms: item.bedrooms,
        adults: item.max_adults,
        options: item.goods
      },
      reviews: [],
      near: [],
      rating: +(item.rating * 100 / 5).toFixed(0),
      isFavorite: item.is_favorite
    });
  });

  return newData;
};

export const favoritesAdapter = (data) => {
  const cards = offersAdapter(data);
  const cities = [];
  const newData = {};

  cards.forEach((item) => cities.push(item.city));
  const uniqCities = cities.filter((item, pos) => cities.indexOf(item) === pos);

  uniqCities.forEach((city) => {
    newData[city] = cards.filter((card) => card.city === city);
  });

  return newData;
};

export const commentsAdapter = (data) => {
  const newData = [];

  data.forEach((item) => {
    newData.push({
      id: item.id,
      user: {
        photo: item.user.avatar_url,
        name: item.user.name
      },
      rating: +(item.rating * 100 / 5).toFixed(0),
      text: item.comment,
      date: item.date
    });
  });

  return newData;
};
