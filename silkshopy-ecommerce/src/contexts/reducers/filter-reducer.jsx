const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT":
            return {...state, sortBy : action.payload};
        
        case "RATING":
            return {...state, rating : action.payload};

        case "RANGE":
            return {...state, priceRange : action.payload};

        default:
            return state;
    }
}

export { filterReducer };