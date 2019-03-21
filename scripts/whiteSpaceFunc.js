let searchQueries = ["", ""];

const whiteSpaceFunc = function () {
    let userInput = document.querySelector(".user-input").value;
    searchQueries[0] = userInput.replace(/\s/g, '%20');
    searchQueries[1] = userInput.replace(/\s/g, '+');
}


// module.exports = whiteSpaceFunc;