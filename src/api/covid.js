import http from './index'

export const fetchData = async (country) => {
    let customUrl;

    if (country) customUrl = `${http.url}/countries/${country}`;
    else customUrl = `${http.url}/all`

    try {
        const { data } = await http.get(customUrl);
        console.log(data)
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchCountries = async () => {
    try {
        const { data, } = await http.get(`${http.url}/countries`);

        return data
    } catch (err) {
        console.log(err);
    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await http.get("https://covid19.mathdro.id/api/daily");
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (err) {
        console.log(err);
    }
};
