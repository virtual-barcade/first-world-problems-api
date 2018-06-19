const express = require('express');

const {
  searchSongCustomProblem,
  searchSongRandomProblem,
  searchSongByIdProblemById,
  searchSongByIdProblemByDesc,
} = require('../controllers');

const router = express.Router();

router.route('/song/:problem').get(searchSongCustomProblem);

router.route('/song/random/problem').get(searchSongRandomProblem);

router
  .route('/song/:songId/problem/id/:problemId')
  .get(searchSongByIdProblemById);

router
  .route('/song/:songId/problem/desc/:problemDesc')
  .get(searchSongByIdProblemByDesc);

module.exports = router;
