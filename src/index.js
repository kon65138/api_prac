import './style.css';

const img = document.querySelector('img');
fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=lzAul6xT8c6v3LiMP3nznRA1fHNrFHRe&s=cats',
  {
    mode: 'cors',
  },
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
