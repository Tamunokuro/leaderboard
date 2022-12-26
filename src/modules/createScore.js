const postScore = async (name, score) => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ WCOS0uYc0PcaQjxxk6I9/scores', {
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

export default postScore;