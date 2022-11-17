const getScore = async () => {
  return await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xvXWioll8KUnbnQMU2ky/scores')
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => error);
};

export default getScore;