const sortByPrice = (sortBy, priceRangeData) => {

    if (sortBy === "LOW_TO_HIGH")
        return priceRangeData.sort((a, b) => Number(a.price) - Number(b.price));

    if (sortBy === "HIGH_TO_LOW")
        return priceRangeData.sort((a, b) => Number(b.price) - Number(a.price));

    return priceRangeData;
}

export { sortByPrice };