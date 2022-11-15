const userName = document.getElementById('name');
const score = document.getElementById('score');
const addScore = document.getElementById('add-score');
const scoreList = document.getElementById('score-list');

const createScore = () => {
  const nameLi = document.createElement('li');
  nameLi.textContent = `${userName.value} ${score.value}`;
  scoreList.append(nameLi);
};

const addtoList = () => {
  addScore.addEventListener('click', (e) => {
    e.preventDefault();
    createScore();
    userName.value = '';
    score.value = '';
  });
};

module.exports = { addtoList, createScore };