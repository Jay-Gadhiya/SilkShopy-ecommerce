const sortByPrice = (sortBy, product) => {

    if (sortBy === "LOW_TO_HIGH")
        return product.sort((a, b) => Number(a.price) - Number(b.price));

    if (sortBy === "HIGH_TO_LOW")
        return product.sort((a, b) => Number(b.price) - Number(a.price));

    return product;
}

export { sortByPrice };