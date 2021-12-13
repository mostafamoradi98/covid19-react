import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import moment from "jalali-moment";
import styles from "./Charts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getDailyData } from "../../redux/actions";

const Charts = () => {

    const dailyData = useSelector((state) => state.dailyData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDailyData());
    }, []);

    const lineChart = dailyData.length ? (
        <Line
            data={{
                labels: dailyData.map(({ date }) =>
                    moment(new Date(date)).locale("fa").format("YYYY/MM/DD")
                ),
                datasets: [
                    {
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: "مبتلا شده",
                        borderColor: "#3333ff",
                        fill: true,
                    }
                ],
            }}
            options={{
                legend: {
                    display: false,
                    labels: {
                        fontFamily: "ih",
                        fontColor: "teal",
                    },
                },
                tooltips: {
                    bodyFontFamily: "ih",
                },
            }}
        />
    ) : null;


    return (
        <div className={styles.container}> {lineChart} </div>
    );
};

export default Charts;
