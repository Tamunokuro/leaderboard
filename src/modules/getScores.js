const getScore = async () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BJq97vqQyuDrDz6yc9qi/scores')
  .then((response) => response.json())
  .then((data) => data.result)
  .catch((error) => error);

export default getScore;