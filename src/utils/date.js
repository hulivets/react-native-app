const DAY_BY_VALUE = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
};

const MONTH_BY_VALUE = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
};

export const getDateData = () => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const date = d.getDate();
    const month = d.getMonth();
    const day = d.getDay();
    const year = d.getFullYear();

    return {
        hours,
        minutes,
        date,
        month: MONTH_BY_VALUE[month],
        day: DAY_BY_VALUE[day],
        year,
    };
};
