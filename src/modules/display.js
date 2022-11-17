import postScore from './createScore.js';

const userName = document.getElementById('name');
const score = document.getElementById('score');
const scoreList = document.getElementById('score-list');
const form = document.getElementById('score-adder');
const scoreAdder = document.getElementById('add-score');

const addtoList = () => {
  scoreAdder.addEventListener('click', (e) => {
    e.preventDefault();
    postScore(userName.value, score.value);
    form.reset();
  });
};

const createScore = () => {
  scoreList.innerHTML = '';
  const scores = JSON.parse(localStorage.getItem('result') || '[]');
  scores.forEach((score) => {
    const nameLi = document.createElement('li');
    nameLi.textContent = `${score.user} ${score.score}`;
    scoreList.append(nameLi);
  });
};

export { createScore, addtoList };