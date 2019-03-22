"use strict";

const searchBtn = document.querySelector(".search-space__button");

const updateDisplay = function(event) {
    if(event.keyCode == '13' || event.type == 'click'){
        whiteSpaceFunc();
        getWiki();
        getGifs();
    }
}

searchBtn.addEventListener("click", updateDisplay);
document.addEventListener("keydown", updateDisplay);
