const keywords = require('./keyword-library.js');
const library = require('./song-library.js');

const songQueryGenerator = problem => {
  const problemInput = problem
    .replace(/^[, ]+|[, ]+$|[, ]+/g, ' ')
    .trim()
    .split();
  for (let i = 0; i < problemInput.length; i += 1) {
    const current = problemInput[i];
    if (keywords[current]) {
      const randIndex = Math.floor(
        Math.random() * library.songs[keywords[current]].length,
      );
      return library.songs[keywords[current]][randIndex];
    }
  }
  return library.etc[Math.floor(Math.random() * library.etc.length)];
};

module.exports = songQueryGenerator;
