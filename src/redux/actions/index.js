import { fetchData, fetchDailyData, fetchCountries } from "../../api/covid";

export const getCovidData = (country = "") => {
    return async (dispatch) => {
        const data = await fetchData(country);
        await dispatch({ type: "INIT", payload: data });
    };
};

export const getDailyData = () => {
    return async (dispatch) => {
        const data = await fetchDailyData();
        await dispatch({ type: "DAILY", payload: data });
    };
};

export const getCountries = () => {
    return async (dispatch) => {
        const data = await fetchCountries();
        await dispatch({ type: "COUNTRIES", payload: data });
    };
};
