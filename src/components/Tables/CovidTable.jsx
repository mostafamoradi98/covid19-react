import {
    Table,
    TableContainer,
    TableRow,
    TableCell,
    TableBody,
    TableHead,
    Card,
    CardContent,
    Paper,
    Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import numeral from "numeral";
import styles from "./CovidTable.module.css";
import { Charts } from "../";
import { sortData } from "./../../utils/sortData";

const CovidTable = () => {
    const countries = useSelector((state) => state.countries);
    const sortedData = sortData(countries);

    return (
        <Card>
            <Typography variant="h5" align="center">
                کل آمار مبتلاشدگان به ترتیب
            </Typography>
            <CardContent>
                <TableContainer
                    component={Paper}
                    dir="rtl"
                    className={styles.table}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">
                                    <Typography variant="h5">
                                        نام کشور
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="h5">
                                        آمار مبتلایان
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedData.map((country, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">
                                        <div
                                            className={styles.infoFlag}
                                            style={{
                                                backgroundImage: `url(${country.countryInfo.flag})`,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                    >
                                        {country.country}
                                    </TableCell>
                                    <TableCell align="center">
                                        {numeral(country.cases).format("0,0")}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <hr />
                <Typography variant="h5" align="center">
                    نمودار گزارش آمار مبتلایان کل کشورها
                </Typography>
                <Paper>
                    <Charts />
                </Paper>
            </CardContent>
        </Card>
    );
};

export default CovidTable;
