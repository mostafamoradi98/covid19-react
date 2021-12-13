import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = "application/json"
const url = "https://disease.sh/v3/covid-19";

export default {
    get: axios.get,
    url,
}