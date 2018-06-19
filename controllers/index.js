const {
  fetchAccessToken,
  fetchSongBySearchTerm,
  fetchSongById,
} = require('../helpers/spotify.js');
const songQueryGenerator = require('../helpers/song-query-generator.js');
const problems = require('../data/problems');
const { genRandomIndex } = require('../helpers/utils');

module.exports.searchSongCustomProblem = async (req, res) => {
  const { problem } = req.params;
  const q = songQueryGenerator(problem);
  try {
    const token = await fetchAccessToken();
    const song = await fetchSongBySearchTerm(q, token.access_token);
    res.json({ problemDesc: problem, song: song.tracks.items[0] });
  } catch (error) {
    res.json(error);
  }
};

module.exports.searchSongRandomProblem = async (req, res) => {
  const { id, problem } = problems[genRandomIndex(problems.length)];
  const q = songQueryGenerator(problem);
  try {
    const token = await fetchAccessToken();
    const song = await fetchSongBySearchTerm(q, token.access_token);
    res.json({ problemId: id, song: song.tracks.items[0] });
  } catch (error) {
    res.json(error);
  }
};

module.exports.searchSongByIdProblemById = async (req, res) => {
  const { songId, problemId } = req.params;
  try {
    const token = await fetchAccessToken();
    const song = await fetchSongById(songId, token.access_token);
    res.json({ problemId, song });
  } catch (error) {
    res.json(error);
  }
};

module.exports.searchSongByIdProblemByDesc = async (req, res) => {
  const { songId, problemDesc } = req.params;
  try {
    const token = await fetchAccessToken();
    const song = await fetchSongById(songId, token.access_token);
    res.json({ problemDesc, song });
  } catch (error) {
    res.json(error);
  }
};
