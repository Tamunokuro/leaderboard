const getScore = async () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ WCOS0uYc0PcaQjxxk6I9/scores')
  .then((response) => response.json())
  .then((data) => data.result)
  .catch((error) => error);

export default getScore;