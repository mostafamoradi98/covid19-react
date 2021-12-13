import Helmet from "react-helmet";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Grid, Hidden } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { Cards, CountryPicker, Header, CovidTable } from "./components";
import styles from "./App.module.css";
import { getCovidData } from "./redux/actions";
import Map from './components/Maps/Map';

const App = () => {

    const dispatch = useDispatch();

    const handleCountryChange = async (country) => {
        dispatch(getCovidData(country));
    };

    const theme = createTheme({
        typography: {
            fontFamily: "ih",
            h5: {
                fontFamily: "yekan"
            },
            body2: {
                fontFamily: "yekan"
            }
        },
    });

    return (
        <MuiThemeProvider theme={theme}>
            <Helmet>
                <title>اپلیکیشن آمار Covid-19</title>
            </Helmet>
            <div className={styles.container}>
                <Grid container spacing={3} justifyContent="space-around" alignItems="center" direction="row" >
                    <Grid item>
                        <Header />

                    </Grid>
                    <Grid item>
                        <CountryPicker handleCountryChange={handleCountryChange} />

                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item lg={8} sm={12} md={8}>

                        <Cards />
                        <Map />
                    </Grid>
                    <Hidden only={["sm", "xs"]}>
                        <Grid item lg={4} md={4}  >
                            <CovidTable />
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        </MuiThemeProvider>
    );
};

export default App;
