import postScore from './createScore.js';
import getScore from './getScores.js';

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

const createScore = async () => {
  scoreList.innerHTML = '';
  const scores = await getScore();
  scores.sort(function(a, b){return b.score-a.score});
  scores.forEach((score) => {
    const nameLi = document.createElement('li');
    nameLi.textContent = `${score.user} - ${score.score}`;
    scoreList.append(nameLi);
  });
};

export { createScore, addtoList };