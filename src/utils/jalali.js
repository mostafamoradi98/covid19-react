import moment from "jalali-moment";

export const convertDate = (date) => {
    return moment(new Date(date))
        .locale("fa")
        .format("D MMM YYYY")
}