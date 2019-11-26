export default (data) => {
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
