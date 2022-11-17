import getScore from "./getScores";

const addScore = document.getElementById('add-score');


const postScore = async (name, score) => {
  await fetch ('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fcVHLAyQwdIZeixcHMPy/scores',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score: score
    })
  })
  .then((response) => response.json())
  .then((data) => getScore());
};



export default postScore;