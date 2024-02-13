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

export default initializeScript;