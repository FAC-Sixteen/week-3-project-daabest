const searchBtn = document.querySelector(".search-space__button");
searchBtn.addEventListener("click", function () {
    whiteSpaceFunc();
    getGifs();
    getWiki();
});

const enterBtn = document.addEventListener("keydown", function (e) {
    
if(e.keyCode == '13') {
    whiteSpaceFunc();
    getGifs();
    getWiki();  
    }
});