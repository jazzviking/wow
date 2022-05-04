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
  showFortune();
});

async function showQuote() {
  main.innerHTML = ellipses;

  let response = await fetch('https://zenquotes.io/api/quotes/');
  let fortune = await response.json();

  main.innerHTML = `<blockquote>"${fortune[0].q}"<blockquote><em class="author">&mdash; ${fortune[0].a}</em>`;
}

showQuote();
