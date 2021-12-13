import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, MenuItem, FormControl } from "@material-ui/core";
import { getCountries } from "./../../redux/actions";

const CountryPicker = ({ handleCountryChange }) => {
    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    return (
        <FormControl >
            <Select
                defaultValue=""
                variant="outlined"
                displayEmpty={true}
                dir="rtl"
                onChange={(e) => handleCountryChange(e.target.value)}
            >
                <MenuItem value="">آمار کل مبتلایان</MenuItem>
                {countries.map((c, index) => (
                    <option key={index} value={c.country}>
                        {c.country}
                    </option>
                ))}
            </Select>
        </FormControl>
    );
};

export default CountryPicker;
