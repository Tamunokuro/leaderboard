import './style.css';

import { createScore, addtoList } from './modules/display.js';

const refresh = document.getElementById('refresh');

addtoList();

window.addEventListener('DOMContentLoaded', () => createScore());

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  createScore();
});