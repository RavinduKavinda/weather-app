'use strict';

import {updateWeather, error404} from "./api.js";

const defaultLocation = "#/weather?lat=51.50722&lon=-0.1275"

const currentLocation = function() {
    window.navigator.geolocation.getCurrentPosition(res => {
        const { latitude, longitude } = res.coords;

        updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    }, err => {
        window.location.hash = defaultLocation;
    });
}

/* searched query */
const searchedLocation = query => updateWeather( ...query.split("&"));

const routes = new Map ([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const checkHash = function () {
    const requestURL = window.location.hash.slice(1);

    const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL];

    routes.get(route) ? routes.get(route)(query) : error404();
}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function(){
    if(!window.location.hash){
        window.location.hash = "#/current-location";
    } else {
        checkHash();
    }
});