const {
  fetchAccessToken,
  fetchSongBySearchTerm,
} = require('../helpers/spotify.js');
const songQueryGenerator = require('../helpers/song-query-generator.js');
const problems = require('../data/problems');
const { genRandomIndex } = require('../helpers/utils');

module.exports.searchSongCustomProblem = async (req, res) => {
  const q = songQueryGenerator(req.params.problem);
  try {
    const token = await fetchAccessToken();
    const song = await fetchSongBySearchTerm(q, token.access_token);
    res.json(song.tracks.items[0]);
  } catch (error) {
    res.json(error);
  }
};

module.exports.searchSongRandomProblem = async (req, res) => {
  const problem = problems[genRandomIndex(problems.length)];
  const q = songQueryGenerator(problem);
  try {
    const token = await fetchAccessToken();
    const song = await fetchSongBySearchTerm(q, token.access_token);
    res.json(song.tracks.items[0]);
  } catch (error) {
    res.json(error);
  }
};

/*
/song/:songId/problem/id/:problemId (supply songId and problemId; used to replicate random search)
/song/:songId/problem/desc/:problemDesc (supply songId and problemDesc, used to replicate user search)
https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/
*/
