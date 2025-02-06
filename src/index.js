import './style.css';

const img = document.querySelector('img');
const refreshBtn = document.getElementById('refreshBtn');
const searchBtn = document.getElementById('seachBtn');
const searchContent = document.getElementById('gifSearch');
const errorMessage = document.querySelector('.errorMsg');

function newGif(input) {
  let searchTerm = 'cats';
  if (input !== undefined) {
    searchTerm = input;
  }
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=lzAul6xT8c6v3LiMP3nznRA1fHNrFHRe&s=${searchTerm}`,
    {
      mode: 'cors',
    },
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      if (response.meta.status === 200 && response.data.length === 0) {
        throw new Error(`couldn't find search term`);
      }
      if (!response.ok) {
        throw new Error(response.meta.msg);
      }
      console.log(response);
      img.src = response.data.images.original.url;
    })
    .catch(function (e) {
      console.error(e);
      errorMessage.textContent = e;
    });
}
newGif();
refreshBtn.addEventListener('click', () => newGif());
searchBtn.addEventListener('click', () => newGif(searchContent.value));
