const priceRangeFilter = (product, priceRange) => {
    return product.filter((item) => Number(item.price) <= priceRange);
}

export { priceRangeFilter };