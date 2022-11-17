import './style.css';

import { createScore, addtoList } from './modules/display';
import getScore from './modules/getScores';

const refresh = document.getElementById('refresh');

addtoList();

window.addEventListener('DOMContentLoaded', () =>  createScore())

refresh.addEventListener('click', (e) => {
    createScore()
})