'use strict';

const main = document.querySelector('.container');
const toggleBtn = document.querySelector('.toggle-loading');

const ellipses = `<div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>`;

toggleBtn.addEventListener('click', () => {
  showQuote();
});

async function showQuote() {
  main.innerHTML = ellipses;

  let response = await fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random'
  );
  let quote = await response.json();

  console.log(quote[0].video['1080p']);
  main.innerHTML = `<video width="75%" controls><source src="${quote[0].video['1080p']}" type="video/mp4"></video>`;

  // main.innerHTML = `<blockquote>"${fortune[0].q}"<blockquote><em class="author">&mdash; ${fortune[0].a}</em>`;
}

showQuote();
