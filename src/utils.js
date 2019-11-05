const findCardById = (id, cards) => {
  const card = cards.find((item) => {
    return item.id === (id);
  });

  return card;
};

export {findCardById};
