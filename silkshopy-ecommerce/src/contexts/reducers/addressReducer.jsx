
export const addressReducer = (state, action) => {

    switch (action.type) {
      case "ADDRESS_OPERATIONS":
        return { ...state,
          address: action.payload 
        };
      default:
        return state;
    }

};