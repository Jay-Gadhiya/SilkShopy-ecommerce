const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT":
            return {...state, sortBy : action.payload};
        
        case "RATING":
        return {...state, rating : action.payload};
    
        default:
            return state;
    }
}

export { filterReducer };