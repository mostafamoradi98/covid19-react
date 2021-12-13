import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./../reducers/index";
import { getCovidData } from "./../actions/index";

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

store.dispatch(getCovidData());