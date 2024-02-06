'use strict';

const API_KEY = 'fa8344492b6ef1194513e9d14f2fe126';

export const fetchData = function(URL, callback){
    fetch(`${URL}&appid=${API_KEY}`)
        .then(res=> res.json())
        .then(data=> callback(data));
}

export const URL = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },

    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },

    airPolution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    
    geoReserve(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },

    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}