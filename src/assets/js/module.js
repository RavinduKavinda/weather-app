'use strict';

export const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/* Date */
export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDay = weekDays[date.getUTCDay()];
    const month = months[date.getUTCMonth()];

    return `${weekDay} ${date.getUTCDate()}, ${month}`;
}

/* Time */
export const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone)* 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}: ${minutes}${period}`
}

/* mps to kph */
export const speed = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

/* level */
export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
    },

    2: {
        level: "Moderate",
        message: "Some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution"
    },

    3: {
        level: "Unhealthy for Sensitive Groups",
        message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },

    4: {
        level: "Unhealthy",
        message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects"
    },

    5: {
        level: "Very Unhealthy",
        message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
    },

    6: {
        level: "Hazardous",
        message: "Everyone may experience more serious health effects"
    }

}




