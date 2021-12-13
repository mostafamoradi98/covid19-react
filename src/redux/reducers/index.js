import { combineReducers } from "redux";

import { covidReducer } from "./covidReducer";
import { countriesReducer } from "./countriesReducer";
import { dailyDataReducer } from "./dailyDataReducer";

export const reducers = combineReducers({
    covid: covidReducer,
    countries: countriesReducer,
    dailyData: dailyDataReducer,
});
