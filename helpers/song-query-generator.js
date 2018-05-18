const keywords = require('./keyword-library.js');
const library = require('./song-library.js');

const songQueryGenerator = problem => {
  let result;
  let cleanProblem = problem.replace(/^[, ]+|[, ]+$|[, ]+/g, ' ').trim();
  let problemToArray = cleanProblem.split(' ');
  for (let i = 0; i < problemToArray.length; i++) {
    let current = problemToArray[i];
    if (keywords[current]) {
      let randNum = Math.floor(
        Math.random() * library.songs[keywords[current]].length,
      );
      return library.songs[keywords[current]][randNum];
    }
  }
  return library.etc[Math.floor(Math.random() * library.etc.length)];
};

module.exports = songQueryGenerator;
