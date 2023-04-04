'use strict';

const $ = (selector) => document.querySelector(selector);

const $shareBtn = $('#share-btn');
const $shareCont = $('#share');

$shareBtn.addEventListener('click', () => {
  $shareBtn.classList.toggle('share-btn-active');
  $shareCont.classList.toggle('hidden');
});
