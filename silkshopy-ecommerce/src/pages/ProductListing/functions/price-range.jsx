const priceRangeFilter = (ratingData, priceRange) => {
    return ratingData.filter((item) => Number(item.price) <= priceRange);
}

export { priceRangeFilter };