const filterReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_PRODUCTS" :
            return {...state, searchedProducts : action.payload}

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

        case "CLEAR":
            return {
                ...state, 
                sortBy: null,
                rating : null,
                laptopOnly: false,
                phoneOnly: false,
                headPhoneOnly: false,
                gamingOnly: false,
                priceRange: 50000
            };

        default:
            return state;
    }
}

export { filterReducer };