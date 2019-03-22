"use strict";
function getGifs() {
  const xhr = new XMLHttpRequest();

  const qGiphy = searchQueries[1];
  const limitGiphy = 3;
  const urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=${APIkeyGiphy}&q=${qGiphy}&limit=${limitGiphy}`;

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const giphyObj = JSON.parse(xhr.responseText);

      const gif1 = document.querySelector(".giphy-container__gif1");
      const gif2 = document.querySelector(".giphy-container__gif2");
      const gif3 = document.querySelector(".giphy-container__gif3");

      const link1 = giphyObj.data[0].images.downsized_medium.url;
      const link2 = giphyObj.data[1].images.downsized_medium.url;
      const link3 = giphyObj.data[2].images.downsized_medium.url;

      gif1.src = link1;
      gif2.src = link2;
      gif3.src = link3;

      gif1.alt = giphyObj.data[0].title;
      gif2.alt = giphyObj.data[1].title;
      gif3.alt = giphyObj.data[2].title;
    }
  };
  xhr.open("GET", urlGiphy, true);
  xhr.send();
};

function getWiki() {
  const xhr = new XMLHttpRequest();
  const qWiki = searchQueries[0];

  const urlWiki = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${qWiki}&origin=*`

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {

      const wikiObj = JSON.parse(xhr.responseText);

      const objName = Object.keys(wikiObj.query.pages)[0];
      document.querySelector('.wiki-title').textContent = wikiObj.query.pages[objName].title;
      document.querySelector('.paragraph').textContent = wikiObj.query.pages[objName].extract;

      const wikiTitle = document.querySelector('.wiki-title');
      
      wikiTitle.textContent = wikiObj.query.pages[objName].title;
      
      const wikiParagraph = document.querySelector('.paragraph');
      
      // if search shows no wiki definition, we'll write a message to inform user about this
      if(wikiObj.query.pages[objName].extract == undefined){
        wikiParagraph.textContent = 'Sorry! I have got NOTHING to show you!!!';
      } 
      // else show definition of search
      else{
        wikiParagraph.textContent = wikiObj.query.pages[objName].extract;
      }
    }
  };
  xhr.open("GET", urlWiki, true);
  xhr.send();
};