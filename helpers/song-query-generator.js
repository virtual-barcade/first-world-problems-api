const keywords = require('./keyword-library.js');
const songLibrary = require('./song-library.js');

const generateWordCollection = string =>
  string
    .replace(/^[, ]+|[, ]+$|[, ]+/g, ' ')
    .trim()
    .split();

const songQueryGenerator = problem => {
  const problemInput = generateWordCollection(problem);
  for (let i = 0; i < problemInput.length; i += 1) {
    const current = problemInput[i];
    if (keywords[current]) {
      const randIndex = Math.floor(
        Math.random() * songLibrary[keywords[current]].length,
      );
      return songLibrary[keywords[current]][randIndex];
    }
  }
  return songLibrary.etc[Math.floor(Math.random() * songLibrary.etc.length)];
};

module.exports = songQueryGenerator;
