function getGifs() {
  const xhr = new XMLHttpRequest();

  let qGiphy = searchQueries[1];
  let limitGiphy = 3;

  let urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=aGajB4I8jDTbIEhwTl7NGhvANZO8iSwQ&q=${qGiphy}&limit=${limitGiphy}`;

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const giphyObj = JSON.parse(xhr.responseText);

      let gif1 = document.querySelector(".giphy-container__gif1");
      let gif2 = document.querySelector(".giphy-container__gif2");
      let gif3 = document.querySelector(".giphy-container__gif3");

      let link1 = giphyObj.data[0].images.downsized_medium.url;
      let link2 = giphyObj.data[1].images.downsized_medium.url;
      let link3 = giphyObj.data[2].images.downsized_medium.url;

      gif1.src = link1;
      gif2.src = link2;
      gif3.src = link3;
    }
  };
  xhr.open("GET", urlGiphy, true);
  xhr.send();
};

function getWiki() {
  const xhr = new XMLHttpRequest();
  let qWiki = searchQueries[0];

  let urlWiki = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${qWiki}&origin=*`

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {

      const wikiObj = JSON.parse(xhr.responseText);

      let objName = Object.keys(wikiObj.query.pages)[0];
      document.querySelector('.wiki-title').textContent = wikiObj.query.pages[objName].title;
      document.querySelector('.paragraph').textContent = wikiObj.query.pages[objName].extract;
    }
  };
  xhr.open("GET", urlWiki, true);
  xhr.send();
};