const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT":
            return {...state, sortBy : action.payload};
        
        case "RATING":
            return {...state, rating : action.payload};

        case "RANGE":
            return {...state, priceRange : action.payload};
        
        case "TOGGLE_SMARTPHONE":
            return {...state, phoneOnly : !state.phoneOnly};

        case "TOGGLE_LAPTOP":
            return {...state, laptopOnly : !state.laptopOnly};

        case "TOGGLE_HEADPHONE":
            return {...state, headPhoneOnly : !state.headPhoneOnly};
    
        case "TOGGLE_GAMING":
            return {...state, gamingOnly : !state.gamingOnly};

        default:
            return state;
    }
}

export { filterReducer };