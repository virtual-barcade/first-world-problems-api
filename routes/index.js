const express = require('express');

const songControllers = require('../controllers/song.js');

const router = express.Router();

router.route('/song').post(songControllers.searchSongs);

module.exports = router;
