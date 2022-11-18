const postScore = async (name, score) => {
  return await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xvXWioll8KUnbnQMU2ky/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  })
    .then((response) => response.json())
    .then((data) => data.result);
};

export default postScore;