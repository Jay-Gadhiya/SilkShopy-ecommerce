const sortByPrice = (sortBy, ratingData) => {

    if (sortBy === "LOW_TO_HIGH")
        return ratingData.sort((a, b) => Number(a.price) - Number(b.price));

    if (sortBy === "HIGH_TO_LOW")
        return ratingData.sort((a, b) => Number(b.price) - Number(a.price));

    return ratingData;
}

export { sortByPrice };