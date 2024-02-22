'use strict';

import { fetchData, URL } from "./api.js";
import * as module from "./module.js";

const addEventOnElements = function (elements, eventType, callback) {
    for (const element of elements) element.addEventListener(eventType, callback);
}

/* mobile devices toggle */
const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");

const initializeScript = () => {
  addEventOnElements(searchTogglers, "click", toggleSearch);
};

/* Search Location */
const searchField = document.querySelector("[data-search-field]");
const searchResult = document.querySelector("[data-search-result]");

let searchTimeout = null;
const searchTimeoutDuration = 1000;

searchField.addEventListener("input", function(){
  searchTimeout ?? clearTimeout(searchTimeout);

  if (!searchField.value) {
    searchResult.classList.remove("active");
    searchResult.innerHTML = "";
    searchField.classList.remove("searching");
  } else {
    searchField.classList.add("searching");
  }

  if (searchField.value) {
    searchTimeout = setTimeout(() => {
      fetchData(URL.geo(searchField.value), function(locations){
        searchField.classList.remove("searching");
        searchResult.classList.add("active");
        searchResult.innerHTML = `
          <ul className="view-list" data-search-list></ul>
        `;

        const items = [];

        for (const {name, lat, lon, country, state} of locations) {
          const searchItem = document.createElement("li");
          searchItem.classList.add("view-item");

          searchItem.innerHTML = `
          <span className="m-icon">location_on</span>

          <div>
            <p className="item-title">
              ${name}
            </p>

            <p className="label-2 item-subtitle">
            ${state || ""} ${country}
            </p>
          </div>

          <a href="#/weather?lat=${lat}&lon=${lon}" 
            className='item-link has-state'
            aria-label="${name} weather" 
            data-search-toggler></a>
          `;

          searchResult.querySelector("[data-search-list]").appendChild(searchItem);
          items.push(searchItem.querySelector("[data-search-toggler]"));
        }

        addEventOnElements(items, "click", function() {
          toggleSearch();
          searchResult.classList.remove("active");
        })
      });
    }, searchTimeoutDuration);
  }
});

/* render all weather data */
const container = document.querySelector("[data-container]");
const loading = document.querySelector("[data-loading]");
const currentLocationBtn = document.querySelector("[data-c-location-btn]");
const errorContent = document.querySelector("[data-error-content]");

export const updateWeather = function(lat, lon){
  loading.style.display = "grid";
  container.style.overflowY = "hidden";
  container.classList.contains("fade-in") ?? container.classList.remove("fade-in");
  errorContent.style.display = "none";

  const currentWeatherSection = document.querySelector("[data-current-weather]");
  const highlightSection = document.querySelector("[data-highlights]");
  const forecastSection = document.querySelector("[data-5days-forecast]");

  currentWeatherSection.innerHTML = "";
  highlightSection.innerHTML = "";
  forecastSection.innerHTML = "";

  if(window.location.hash === "#/current-location"){
    currentLocationBtn.setAttribute("disabled", "");
  } else {
    currentLocationBtn.removeAttribute("disabled");
  }

  /* current weather */
  fetchData(URL.currentWeather(lat, lon), function (currentWeather){
    const {
      weather,
      dt: dateUnix,
      sys: {sunrise: sunriseUnixUTC, senset: sunsetUnixUTC},
      main: {temp, stat, pressure, humidity},
      visiblity,
      timezone
    } = currentWeather

    const [{description, icon}] = weather;
    const card = document.createElement("div");

    card.classList.add("card", "card-lg", "current-weather-card");

    card.innerHTML = `
      <h2 className="title-2 card-title">
        NOW
      </h2>

      <div className="weapper">
        <p className="heading">
          ${parseInt(temp)}&deg;<sup>c</sup>
        </p>

        <img src="./../../assets/images/weather_icons/${icon}.png" alt="" className="weather-icon" alt="${description}" />
      </div>

      <p className="body-3">
        ${description}
      </p>

      <ul className="meta-list">
        <li className="meta-item">
          <span className="m-icon">calendar_today</span>

          <p className="title-3 meta-text">
            ${module.getDate(dateUnix, timezone)}
          </p>
        </li>

        <li className="meta-item">
          <span className="m-icon">location_on</span>

          <p className="title-3 meta-text" data-location>
            
          </p>
        </li>
      </ul>
    `;

    fetchData(URL.reverseGeo(lat, lon), function([{name, country}]) {
      card.querySelector("[data-location]").innerHTML = `${name}, ${country}
      `
    });
    
    currentWeatherSection.appendChild(card);
  })
}

export const error404 = function (){

}