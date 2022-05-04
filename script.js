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

async function showFortune() {
  main.innerHTML = ellipses;

  let response = await fetch('http://zenquotes.io/api/random/');
  let fortune = await response.json();

  main.innerHTML = `<blockquote>"${fortune[0].q}"<blockquote><em class="author">&mdash; ${fortune[0].a}</em>`;
}

showFortune();
