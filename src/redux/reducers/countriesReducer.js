export const countriesReducer = (state = [], action) => {
    switch (action.type) {
        case "COUNTRIES":
            return [...action.payload];
        default:
            return state;
    }
};
