import { filterReducer } from "../reducers/filter-reducer";
import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {

    const [state, dispatch] = useReducer(filterReducer, {
        sortBy: "",
        rating : null,
        showAllProducts: true,
        laptopOnly: false,
        phoneOnly: false,
        headPhoneOnly: false,
        gamingOnly: false,
        priceRange: 50000
    })

    return (
        <FilterContext.Provider value={{state, dispatch}}>
          {children}
        </FilterContext.Provider>
    )
}

export { FilterProvider, useFilter };