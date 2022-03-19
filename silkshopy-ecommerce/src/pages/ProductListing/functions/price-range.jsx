const priceRangeFilter = (sortedData, priceRange) => {
    return sortedData.filter((item) => Number(item.price) <= priceRange);
}

export { priceRangeFilter };