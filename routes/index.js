const express = require('express');

const songControllers = require('../controllers');

const router = express.Router();

router.route('/song/:problem').get(songControllers.searchSongCustomProblem);

router
  .route('/song/random-problem')
  .get(songControllers.searchSongRandomProblem);

/*
/song/:songId/problem/id/:problemId (supply songId and problemId; used to replicate random search)
/song/:songId/problem/desc/:problemDesc (supply songId and problemDesc, used to replicate user search)
https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/
*/

module.exports = router;
