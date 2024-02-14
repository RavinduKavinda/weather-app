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
}

export default initializeScript;