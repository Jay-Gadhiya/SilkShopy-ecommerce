const sortByRating = (sortedData, ratings) => {

    if(ratings === "4_AND_ABOVE")
        return sortedData.filter(item => Number(item.rating) > 4)

    if(ratings === "3_AND_ABOVE")
        return sortedData.filter(item => Number(item.rating) > 3)

    if(ratings === "2_AND_ABOVE")
        return sortedData.filter(item => Number(item.rating) > 2)

    if(ratings === "1_AND_ABOVE")
        return sortedData.filter(item => Number(item.rating) > 1)

    return sortedData;

}

export { sortByRating };