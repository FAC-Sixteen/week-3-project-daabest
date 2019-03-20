(function getGifs () {
    var xhr = new XMLHttpRequest();
  
  let APIkeyGiphy = "aGajB4I8jDTbIEhwTl7NGhvANZO8iSwQ";
  let qGiphy = "dummy";
  let limitGiphy = 3;
  
  let urlGiphy = `api.giphy.com/v1/gifs/search?api_key=${APIkeyGiphy}&q=${qGiphy}&limit=${limitGiphy}`;
  

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          const giphyObj = JSON.parse(xhr.responseText);

          let gif1 = document.querySelector(".giphy-container__gif1");
          let gif2 = document.querySelector(".giphy-container__gif2");
          let gif3 = document.querySelector(".giphy-container__gif3");

          let link1 = giphyObj.data[0].images.downsized_large.url;
          let link2 = giphyObj.data[1].images.downsized_large.url;
          let link3 = giphyObj.data[2].images.downsized_large.url;

          gif1.src = link1;
          gif2.src = link2;
          gif3.src = link3;


          console.log(giphyObj);
        }
    };
    xhr.open("GET", urlGiphy, true);
    xhr.send();
  })();
  
  // module.exports = getGifs;


// TO MAKE IT NICER ????

//   let gifs = [gif1, gif2, gif3];
//   let index;
//   let link = giphyObj.data[index].images.downsized_large.url;
//   gif1.src = link;

//   let assignGif = gifs.forEach(function(x){
//       gifs.indexOf(x) = index;
//   })
