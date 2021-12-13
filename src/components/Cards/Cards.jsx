import cn from "classnames";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import { convertDate } from './../../utils/jalali';

const Cards = () => {
    const { cases, recovered, deaths, updated, todayCases, todayRecovered, todayDeaths } = useSelector(
        (state) => state.covid
    );

    if (!cases) return "...loading";

    const grids = [
        {
            style: styles.infected,
            headerText: "مبتلا شدگان امروز",
            date: convertDate(updated),
            infoText: "جمع کل مبتلایان",
            countUpEnd: cases,
            today: todayCases
        },
        {
            style: styles.recovered,
            headerText: "بهبود یافتگان امروز",
            date: convertDate(updated),
            infoText: "جمه کل بهبود یافتگان",
            countUpEnd: recovered,
            today: todayRecovered
        },
        {
            style: styles.deaths,
            headerText: "فوت شدگان امروز",
            date: convertDate(updated),
            infoText: "جمع کل فوت شدگان",
            countUpEnd: deaths,
            today: todayDeaths
        },
    ];

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="space-between" dir="rtl">
                {grids.map((info, index) => (
                    <Grid
                        key={index}
                        item
                        component={Card}
                        xs={12}
                        md={3}
                        className={cn(styles.card, info.style)}
                    >
                        <CardContent>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                {info.headerText}
                            </Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={info.today}
                                    duration={2}
                                    separator=","
                                />
                            </Typography>

                            <Typography variant="body2" color="textSecondary" gutterBottom >
                                {info.date}
                            </Typography>
                            <Typography color="textSecondary">
                                {info.infoText}
                            </Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={info.countUpEnd}
                                    duration={2}
                                    separator=","
                                />
                            </Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Cards;
