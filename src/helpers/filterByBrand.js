const filterByBrand = (items, brand) => {
  if (!brand) {
    return items;
  }

  return items.filter((item) => {
    return item.make.toLowerCase() === brand.toLowerCase();
  });
};

export default filterByBrand;
