export const dailyDataReducer = (state = [], action) => {
    switch (action.type) {
        case "DAILY":
            return [...action.payload];
        default:
            return state;
    }
};
