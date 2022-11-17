const getScore = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fcVHLAyQwdIZeixcHMPy/scores')
    .then((response) => response.json())
    .then((data) => localStorage.setItem('result', JSON.stringify(data.result)))
    .catch((error) => error);
};

export default getScore;