const keywords = require('../data/keywords');
const songs = require('../data/songs');
const { genRandomIndex } = require('./utils');

const generateWordCollection = string =>
  string
    .replace(/^[, ]+|[, ]+$|[, ]+/g, ' ')
    .trim()
    .split(' ');

const songQueryGenerator = problem => {
  const problemInput = generateWordCollection(problem);
  for (let i = 0; i < problemInput.length; i += 1) {
    const current = problemInput[i];
    if (keywords[current]) {
      const randomIndex = genRandomIndex(songs[keywords[current]].length);
      return songs[keywords[current]][randomIndex];
    }
  }
  const randomIndex = genRandomIndex(songs.etc.length);
  return songs.etc[randomIndex];
};

module.exports = songQueryGenerator;
